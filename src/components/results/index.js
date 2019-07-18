import React from "react"
import Destination from "./destination";
import FlightSearchWidget from "../widgets/skyscannerFlights";

function Results() {
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
    </div>
  )
}
export default Results