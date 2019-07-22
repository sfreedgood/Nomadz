import React, { Component } from 'react';
import Select from 'react-select'
// import countryList from 'react-select-country-list' //built-in options for all countries
// import countryList from "../../redux/countryList" //custom made options for use with budget widget
// import topDestinations from "../../redux/top100Destinations"

// //redux
// import { connect } from "react-redux"

// function mapStateToProps (state) {
//   const { country, city } = state.searchParams
//   return { country, city }
// }

class CitySelector extends Component {
  constructor(props) {
    super(props)
 
    // this.options = countryList().getData() // for use with the full country list. Note: this may break the budgeting functions
    // this.options = this.getCities()
 
    this.state = {
      // options: this.props.cities,
      value: null,
    }
  }

  // getCities = () => {
  //   console.log(this.props.country)
  //   if (this.props.country) {
  //     let cities = topDestinations.filter( item => {
  //       if ( this.props.country.value === item.countryCode ){
  //         return item
  //       } //loops though top destination, if country matches selected country, returns destination
  //     })
  //     return cities
  //   } else {
  //     return topDestinations
  //   }
  // }
 
  changeHandler = value => {
    this.setState({ value })
  }
 
  render() {
    console.log(this.props)
    console.log(this.state.options)
    return (
      <Select
        options={this.props.cities}
        value={this.state.value}
        onChange={this.props.setSearchParam}
        // onSelect={this.props.onSelect}
      />
    )
  }
}

export default CitySelector