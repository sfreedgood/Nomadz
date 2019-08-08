import React from "react"
import './skyscannerWidget.css'

// Documentation for widget:
// https://partners.skyscanner.net/affiliates/widgets-documentation/flight-search-widget

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { city } = state.searchParams
  return { city }
};

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
  }

  render() {
    let destination = this.props.city ? this.props.city.city : "Anywhere" //checks if city in props, if not, destination not pre-populated, if yes, prepopulated with selected city
    return (
      <div id="skyscanner-widget" className="flight-search-widget detail" >
        {
          this.state.width >= 400 ?
            <div data-skyscanner-widget="MultiVerticalWidget" //required
              data-associate-id="ABC_DEF_12345_56789" //required, need to get
              data-locale="en-GB"
              market="US"
              currency="USD"
              data-destination-name={`"${destination}"`} //this string formatting is required in order to function
              ></div>
          : <div data-skyscanner-widget="LocationWidget" 
              data-locale="en-GB"
              data-location={`${destination}`} 
              data-colour="cirrus"
              style={{marginRight: "2%"}}
              ></div>
        }
        </div>
    )
  }
}

export default connect(
  mapStateToProps
)(MultiVerticalWidget)
