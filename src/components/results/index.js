import React from "react"
import Destination from "./destination";
import FlightSearchWidget from "../widgets/skyscannerFlights";
import BudgetWidget from "../widgets/budgetWidget";
import { withRouter, Link, Route } from "react-router-dom"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { country, city, budget, duration, dates } = state.searchParams
  return { country, city, budget, duration, dates }
};

function Results(props) {
  // let destinationResults = ['1', '2', '3', '4']
  // let destinationList = destinationResults.map( (destination, index) => {
  //   return (
  //     <Destination key={index} destination={destination} />
  //   )
  // })
  let element
  if (props.country) { element = document.getElementById(`${props.country.value}`) }
  console.log(element)

  console.log(props.country)

  return(
    <div className="results">
      <div className="result">
        <Link to="/flightSearchWidget">Flights to {`${props.city}`}</Link>
      </div>
      <div className="result">
        <Link to="/budgetWidget">Budget for {`${props.country}`}</Link>
      </div>


      <Route path="/flightSearchWidget"
             component={() => <FlightSearchWidget city={props.city}/>}
      />      
      <Route path="/flightSearchWidget"
             component={() => <BudgetWidget country={props.country} city={props.city} />}
      />
      
    </div>
  )
}
export default withRouter(connect(
  mapStateToProps
)(Results))