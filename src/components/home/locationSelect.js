import React, { Component } from "react"
import CountrySelector from "./countrySelect.js";
import CitySelector from "./citySelect.js"
import topDestinations from "../../redux/top100Destinations.js"
import "./home.css"



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
    let selection = event //country list event is an object, all other event are standard targets
    console.log(event)
    if (event === null) { // prevents clearing dropdown from erroring out
      //removing option from dropdown also deletes it from Redux, and resets the cities list to topDestinations
      //to have clearing dropdown default to previous selection, comment out code in this scope
      this.setState({
        cities: topDestinations,
        city: null,
        country: null
      })
      this.props.setCity(null)
      this.props.setCountry(null)
    } else if (event.city) {
      this.setState({ city: selection })
      this.props.setCity(selection)
      this.props.setCountry(selection)
    } else {
      this.setState({ country: selection })
      this.props.setCountry(selection)
      this.getCities(event)
    }
  }

  componentDidMount = () => {
    this.setState(prevState => ({ cities: topDestinations }))
  }

  getCities = (event) => {
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
    return (
      <div id="location-selectors" className="query">
        <h1 className="query-title">WHERE?</h1>
        <div className="location-dropdowns">
          <div className="location-sub-query">
            <CountrySelector setSearchParam={this.setSearchParam} />
          </div>
          <div className="location-sub-query">
            <CitySelector cities={this.state.cities} type={this.props.query} country={this.state.country} setSearchParam={this.setSearchParam} />
          </div>
        </div>
      </div>
    );
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSelectors)