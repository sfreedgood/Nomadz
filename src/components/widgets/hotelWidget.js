import React from "react"
import HotelScript from "./sckyscannerHotelScript"
// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { city } = state.searchParams
  return { city }
};

function HotelSearchWidget (props) {
  console.log("I'm the Hotel widget")
  // render () {
    return (
      <div className="hotel-search-widget">
        <HotelScript />
        <div data-skyscanner-widget="HotelSearchWidget" //required
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
)(HotelSearchWidget)