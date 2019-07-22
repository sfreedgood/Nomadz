import React from "react"
import Select from 'react-select'
import CountrySelector from "./locationSelect";
import topDestinations from "../../redux/top100Destinations"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { country, city, budget, duration, dates } = state
  return { country, city, budget, duration, dates }
};

function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
  return {
    setCountry: (country) => dispatch({type: "SET_COUNTRY", payload: {country}}),
    setCity: (city) => dispatch({type: "SET_CITY", payload: {city}}),
    setDuration: (duration) => dispatch({type: "SET_DURATION", payload: {duration}}),
    setBudget: (budget) => dispatch({type: "SET_BUDGET", payload: {budget: budget}}),
    setDates: (dates) => dispatch({type: "SET_DATES", payload: {dates: dates}})
  }
}



//Component
function Query (props) {
  let queryTitle  = props.query.charAt(0).toUpperCase() + props.query.slice(1) + "?"//Capitalizes only the first character, then concatenates rest of word (omitting first character)
  let queryOptions = props.queryData.map( (item, index) => {
    return {value: item, label: item}
  })

  const setSearchParam = (event) => {
    // event.preventDefault()
    let selection = event || event.target.value //country list event is an object, all other event are standard targets
    console.log(selection)
    switch (props.query) {
      // case "when":
      //   props.setDates(selection)
      //   break
      case "country":
        props.setCountry(selection)
        break
      case "city":
        props.setCity(selection)
        break
      case "dates": 
        props.setDates(selection)
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
  console.log(props.country && props.country.bool())
  return(
    <div className="query">
      <h1>{queryTitle}</h1>
      <form className="search-field">
      {
        props.query === "countries" && 
          <CountrySelector type={props.query} setSearchParam={setSearchParam} />
      }
      {
        props.country &&
          <CountrySelector type={props.query} country={props.country} setSearchParam={setSearchParam} />
      }
      {
        props.query !== "countries" && props.query !== "city" &&
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