import React from "react"
import WidgetScript from "./skyscannerWidgetScript";

// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { city } = state.searchParams
  return { city }
};

function MultiVerticalWidget (props) {
  console.log("I'm the flight widget")
  // render () {
    return (
      <div className="flight-search-widget detail">
        <WidgetScript />
        <div data-skyscanner-widget="MultiVerticalWidget" //required
            data-associate-id="ABC_DEF_12345_56789" //required, need to get
            data-locale="en-GB"
            market="US"
            currency="USD"
            // data-destination-name={`"${props.city.city}"`} //this string formatting is required in order to function
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
)(MultiVerticalWidget)