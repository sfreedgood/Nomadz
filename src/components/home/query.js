import React, { Component } from "react"
import Select from 'react-select'
import CountrySelector from "./countrySelect";
import CitySelector from "./citySelect"
// import topDestinations from "../../redux/top100Destinations"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { country, city, budget, duration, dates } = state
  return { country, city, budget, duration, dates }
};

function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
  return {
    setCountry: (country) => dispatch({type: "SET_COUNTRY", payload: {country}}),
    setCity: (city) => dispatch({type: "SET_CITY", payload: {city}}),
    setDuration: (duration) => dispatch({type: "SET_DURATION", payload: {duration}}),
    setBudget: (budget) => dispatch({type: "SET_BUDGET", payload: {budget: budget}}),
    setDates: (dates) => dispatch({type: "SET_DATES", payload: {dates: dates}})
  }
}



//Component
class Query extends Component {
  state = {
    queryTitle: this.props.query.charAt(0).toUpperCase() + this.props.query.slice(1) + "?", //Capitalizes only the first character, then concatenates rest of word (omitting first character)
    queryOptions: this.props.queryData.map( (item, index) => {
      return {value: item, label: item}
    }),
    country: false
  }

  setSearchParam = (event) => {
    console.log(event)
    let selection = event || event.target.value //country list event is an object, all other event are standard targets
    // console.log(this.props.query)
    switch (this.props.query) {
      // case "when":
      //   this.props.setDates(selection)
      //   break
      case "countries":
        this.loadCities()
        this.props.setCountry(selection)
        break
      case "city":
        this.props.setCity(selection)
        break
      case "dates": 
        this.props.setDates(selection)
        break
      case "budget":
        this.props.setBudget(selection)
        break
      case "duration":
        this.props.setDuration(selection)
        break
      default:
        return null
    }
  }

  loadCities = () => {
    
    this.setState( prevState => ({
      country: !prevState.country
    }))
  }

  render () {
    // console.log(this.props)
    return(
      <div className="query">
        <h1>{this.state.queryTitle}</h1>
        <form className="search-field">
        {
          this.props.query === "countries" && 
            <CountrySelector type={this.props.query} onSelect={this.loadCities} setSearchParam={this.setSearchParam} />
        }
        {
          this.state.country &&
            <CitySelector type={this.props.query} country={this.props.country} setSearchParam={this.setSearchParam} />
        }
        {
          this.props.query !== "countries" && this.props.query !== "city" &&
            <Select 
              onChange={this.setSearchParam} 
              options={this.queryOptions}
              value={this.queryOptions}
            />
        }
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query)