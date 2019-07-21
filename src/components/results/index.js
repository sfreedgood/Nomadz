import React from "react"
import Destination from "./destination";
import FlightSearchWidget from "../widgets/skyscannerFlights";
import Budget from "../details/budget";

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { location, budget, duration, dates } = state.searchParams
  return { location, budget, duration, dates }
};

function Results(props) {
  let destinationResults = ['1', '2', '3', '4']
  let destinationList = destinationResults.map( (destination, index) => {
    return (
      <Destination key={index} destination={destination} />
    )
  })

  return(
    <div className="results">
      <div className="destination-list">
        {destinationList}
      </div>
      <FlightSearchWidget />
      {
        props.location &&
        <Budget />
      }
    </div>
  )
}
export default connect(
  mapStateToProps
)(Results)