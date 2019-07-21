import React from "react"
// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { location, budget, duration, dates } = state.searchParams
  return { location, budget, duration, dates }
};

function FlightSearchWidget (props) {
  // let departureDate = null
  // let returnDate = null
  // let location = 'New York'
  //  ? 'placeholder' : props.location.replace(/"/g, "'")
    // console.log(location)

  return (
    <div className="flight-search-widget">
      <div data-skyscanner-widget="FlightSearchWidget" //required
           data-associate-id="ABC_DEF_12345_56789" //required, need to get
           data-locale="en-GB"
           market="US"
           currency="USD"
          //  data-destination-name={`"${location}"`} //this string formatting is required in order to function
          //  data-flight-outbound-date={departureDate}
          //  data-flight-inbound-date={returnDate}
           >
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps
)(FlightSearchWidget)