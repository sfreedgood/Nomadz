import React, { Component } from "react"
// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"
import FlightScript from "./skyscannerFlightsScript";

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { city } = state.searchParams
  return { city }
};

function FlightSearchWidget (props) {

  // render () {
    return (
      <div className="flight-search-widget">
        <FlightScript />
        <div data-skyscanner-widget="FlightSearchWidget" //required
            data-associate-id="ABC_DEF_12345_56789" //required, need to get
            data-locale="en-GB"
            market="US"
            currency="USD"
            data-destination-name={`"${props.city.city}"`} //this string formatting is required in order to function
            //  data-flight-outbound-date={departureDate}
            //  data-flight-inbound-date={returnDate}
            >
        </div>
      </div>
    )
  // }
}

export default connect(
  mapStateToProps
)(FlightSearchWidget)