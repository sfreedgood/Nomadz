import React from "react"
// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { searchQueries } = state.setup
  console.log(state)
  const { location, budget, duration, dates } = state.searchParams
  return { searchQueries, location, budget, duration, dates }
};

function FlightSearchWidget () {
  let departureDate = null
  let returnDate = null
  return (
    <div className="flight-search-widget">
      <div data-skyscanner-widget="FlightSearchWidget" //required
           data-associate-id="ABC_DEF_12345_56789" //required, need to get
           data-locale="en-GB"
           market="US"
           currency="USD"
           data-destination-name={`"${'Edinburgh'}"`} //this string formatting is required in order to function
           data-flight-outbound-date={departureDate}
           data-flight-inbound-date={returnDate}
           >
      </div>
    </div>
  )
}

export default FlightSearchWidget