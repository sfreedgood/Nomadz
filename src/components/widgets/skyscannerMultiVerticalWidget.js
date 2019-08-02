import React from "react"

// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { city } = state.searchParams
  return { city }
};


const styles = {
  backgroundColor: "rgba(255,255,255,0.9)",
  display: "none",
  height: "90%",
  margin: "1%",
  padding: "1%",
  minWidth: "400px",
  alignSelf: "center"
}

class MultiVerticalWidget extends React.Component {
  componentDidMount() {
    window.skyscanner.widgets.load(); // loads script from index.html here for widget to work. Otherwise widget would not load on subsequent navigations to Results page
  }

  render() {
    let destination = this.props.city ? this.props.city.city : undefined //checks if city in props, if not, destination not pre-populated, if yes, prepopulated with selected city
    return (
      <div id="skyscanner-widget" className="flight-search-widget detail" style={styles}>
        <div data-skyscanner-widget="MultiVerticalWidget" //required
            data-associate-id="ABC_DEF_12345_56789" //required, need to get
            data-locale="en-GB"
            market="US"
            currency="USD"
            data-destination-name={`"${destination}"`} //this string formatting is required in order to function
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
