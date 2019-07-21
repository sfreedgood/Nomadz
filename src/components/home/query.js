import React from "react"
import Select from 'react-select'
import CountrySelector from "./countrySelect";

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { location, budget, duration, dates } = state
  return { location, budget, duration, dates }
};

function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
  return {
    setLocation: (location) => dispatch({type: "SET_LOCATION", payload: {location}}), 
    setDuration: (duration) => dispatch({type: "SET_DURATION", payload: {duration}}),
    setBudget: (budget) => dispatch({type: "SET_BUDGET", payload: {budget: budget}}),
    setDates: (dates) => dispatch({type: "SET_DATES", payload: {dates: dates}})
  }
}



//Component
function Query (props) {
  console.log(props.query)
  let queryTitle = props.query.charAt(0).toUpperCase() + props.query.slice(1) + "?"//Capitalizes only the first character, then concatenates rest of word (omitting first character)
  let queryOptions = props.queryData.map( (item, index) => {
    return {value: item, label: item}
  })
  
  const setSearchParam = (event) => {
    // event.preventDefault()
    let selection = event || event.target.value //country list event is an object, all other event are standard targets
    console.log(selection)
    switch (props.query) {
      case "when":
        props.setDates(selection)
        break
      case "where":
        props.setLocation(selection)
        break
      case "budget":
        props.setBudget(selection)
        break
      case "duration":
        props.setDuration(selection)
        break
      default:
        return null
    }
  }

  return(
    <div className="query">
      <h1>{queryTitle}</h1>
      <form className="search-field">
      {
        props.query === "where" ?
          <CountrySelector setSearchParam={setSearchParam} />
          :
          <Select 
            onChange={setSearchParam} 
            options={queryOptions}
            value={queryOptions}
          />
      }        
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query)