import React, { Component } from "react"
import CountrySelector from "./countrySelect";
import CitySelector from "./citySelect"
import topDestinations from "../../redux/top100Destinations"


//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { country, city } = state.searchParams
  return { country, city }
};

function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
  return {
    setCountry: (country) => dispatch({type: "SET_COUNTRY", payload: {country}}),
    setCity: (city) => dispatch({type: "SET_CITY", payload: {city}}),
  }
}

class LocationSelectors extends Component {
  state = { 
    country: false
   }

  setSearchParam = (event) => {
    console.log(event)
    let selection = event //country list event is an object, all other event are standard targets
    if (event.city) {
      this.props.setCity(selection)
    } else {
      this.setState({ country: true })
      this.props.setCountry(selection)
      this.getCities(event)
    }
  }

  getCities = (event) => {
    // console.log(event.label)
    if (event.label) {
      let cities = topDestinations.filter( item => {
        if ( event.value === item.countryCode ){
          return item
        } //loops though top destination, if country matches selected country, returns destination
      })
      this.setState(prevState => ({ cities }))
    } else {
      this.setState(prevState => ({ cities: topDestinations }))
    }
  }

  render() {
    console.log(this.state.cities)
    return (
      <div id="location-selectors" className="query">
        <h1 className="query-header">Where?</h1>
          <CountrySelector setSearchParam={this.setSearchParam} />
        {
          !this.state.cities &&
          <button onClick={this.getCities} >Show Me All Cities</button>
        }
        {
          this.state.cities &&
            // <div className="location-sub-squery">
              // {/* <h2 className="sub-query-header">City</h2> */}
              <CitySelector cities={this.state.cities} type={this.props.query} country={this.state.country} setSearchParam={this.setSearchParam} />
            // </div>
        }
      </div>
    );
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSelectors)