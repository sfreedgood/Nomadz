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


const styles = {
  backgroundColor: "rgba(255,255,255,0.9)",
  display: "none",
  height: "90%",
  margin: "1%",
  padding: "1%",  
}

class MultiVerticalWidget extends React.Component {
  componentDidMount() {
    window.skyscanner.widgets.load();
  }

  render() {
  // render () {
    return (
      <div id="skyscanner-widget" className="flight-search-widget detail" style={styles}>
        {/* <WidgetScript /> */}
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
  }
}

export default connect(
  mapStateToProps
)(MultiVerticalWidget)
