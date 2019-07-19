import React from "react"

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
  let queryOptions = props.queryData.map( (item, index) => <option key={index} value={item}>{item}</option>)
  
  const setSearchParam = (event) => {
    event.preventDefault()
    console.log(event.target)
    let selection = event.target.value
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
        <select onChange={setSearchParam}>
          {queryOptions}
        </select>
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query)