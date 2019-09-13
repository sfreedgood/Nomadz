import React, { Component } from "react"
import CountrySelector from "./countrySelect.js";
import CitySelector from "./citySelect.js"
import topDestinations from "../../data/top100Destinations"
import "./home.css"
import { connect } from "react-redux"
import { regionOptionsCity, regionOptionsCountry } from "../../data/data" //custom made options for use with budget widget
import { rankInsertionSort, sortCompare } from '../../data/sorts'
import countryList from "../../data/countryList.js";

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
    country: false,
  }

  setSearchParam = (event) => {
    let selection = event //country list event is an object, all other event are standard targets
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
    this.setOptions()
  }

  getCities = (event) => {
    let data = this.state.cities
    if (event.label) {
      let cities = data.filter( item => {
        return event.value === item.countryCode ? true : false //loops though top destination, if country matches selected country, returns destination
      })
      this.setState(prevState => ({ cities: cities }))
    } else {
      this.setState(prevState => ({ cities: data }))
    }
  }

  //sets city and country options according to selected sort, accounting for regional subdivisions
  setOptions = (event) => {
    let filter = event ? event.currentTarget.name : null
    let cities = topDestinations
    let countries = countryList
    if (filter === "ranked") {
      cities = regionOptionsCity.map( city => {
        return {
          label: city.label, options: rankInsertionSort(city.options)
        }
      })
      countries = regionOptionsCountry.map( country => {
        return {
          label: country.label, options: rankInsertionSort(country.options)
        }
      })
      this.setState( prevState => ({
        cities,
        countries
      }))
    } else if (filter === "alphabetical") {
      cities = regionOptionsCity.map( city => {
        return {
          label: city.label, options: city.options.sort(sortCompare)
        }
      })
      countries = regionOptionsCountry.map( country => {
        return {
          label: country.label, options: country.options.sort(sortCompare)
        } 
      })
      this.setState( prevState => ({
        cities,
        countries
      }))
    } else {
      this.setState( prevState => ({
        cities,
        countries
      }))
    }
  }

  render() {
    console.log(this.state.cities)
    console.log(this.state.countries)
    return (
      <div id="location-selectors" className="query">
        <h1 className="query-title">WHERE?</h1>
        <div className="location-dropdowns">
          <div className="toggle-sort">
            <button onClick={this.setOptions}
              className="order-options"
              name="alphabetical"> Alphabetical
            </button>
            <button onClick={this.setOptions}
              className="order-options"
              name="ranked"> Ranked
            </button>
          </div>
          <div className="location-sub-query">
            <CountrySelector countryOptions={this.state.countries} setSearchParam={this.setSearchParam} />
          </div>
          <div className="location-sub-query">
            <CitySelector cityOptions={this.state.cities} type={this.props.query} country={this.state.country} setSearchParam={this.setSearchParam} />
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