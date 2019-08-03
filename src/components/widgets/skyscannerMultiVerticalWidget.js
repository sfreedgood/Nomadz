import React from "react"

// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { city } = state.searchParams
  return { city }
};


// const styles = {
//   backgroundColor: "rgba(255,255,255,0.9)",
//   display: "none",
//   height: "90%",
//   margin: "1%",
//   padding: "1%",
//   minWidth: "300px",
//   alignSelf: "center"
// }

class MultiVerticalWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  
  async componentWillMount() {
    await this.updateWindowDimensions();
    await window.addEventListener('resize', this.updateWindowDimensions);

    await window.skyscanner.widgets.load(); // loads script from index.html here for widget to work. Otherwise widget would not load on subsequent navigations to Results page
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = async () => {
    await this.setState({ width: window.innerWidth, height: window.innerHeight });
    await this.handleScale()

  }

  handleScale = () => {
    console.log(this.state)
    if (this.state.width <= 400) {
      this.setState({widgetScale: 0.5})
    } else if (this.state.width <= 600) {
      this.setState({widgetScale: 0.75})
    } else {
      this.setState({widgetScale: 1})
    }
 
  }

  render() {
    let destination = this.props.city ? this.props.city.city : undefined //checks if city in props, if not, destination not pre-populated, if yes, prepopulated with selected city
    console.log(this.state.width)
    console.log(this.state.widgetScale)
    return (
      <div id="skyscanner-widget" className="flight-search-widget detail" >
        <div data-skyscanner-widget="MultiVerticalWidget" //required
            data-associate-id="ABC_DEF_12345_56789" //required, need to get
            data-locale="en-GB"
            market="US"
            currency="USD"
            data-destination-name={`"${destination}"`} //this string formatting is required in order to function
            data-multi-city-max-flights-number=""
            data-widget-scale={`${this.state.widgetScale}`}
            data-powered-by-size={`${this.state.widgetScale}`}
            // data-responsive="true"
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
