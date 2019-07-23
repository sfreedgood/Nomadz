import React from "react"
import Destination from "./destination";
import FlightSearchWidget from "../widgets/skyscannerFlights";
import BudgetWidget from "../widgets/budgetWidget";

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { country, city, budget, duration, dates } = state.searchParams
  return { country, city, budget, duration, dates }
};

function Results(props) {
  let destinationResults = ['1', '2', '3', '4']
  let destinationList = destinationResults.map( (destination, index) => {
    return (
      <Destination key={index} destination={destination} />
    )
  })
  let element
  if (props.country) { element = document.getElementById(`${props.country.value}`) }
  console.log(element)

  console.log(props.country)

  return(
    <div className="results">
      <div className="destination-list">
        {destinationList}
      </div>
      {
        props.city &&
        <FlightSearchWidget city={props.city}/>
      }
      {
        props.country &&
        <BudgetWidget country={props.country} city={props.city} />
      }
    </div>
  )
}
export default connect(
  mapStateToProps
)(Results)