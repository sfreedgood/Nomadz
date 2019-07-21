import React, { Component } from 'react';
import Select from 'react-select'
// import countryList from 'react-select-country-list' //built-in options for all countries
import countryList from "../../redux/countryList" //custom made options for use with budget widget

class CountrySelector extends Component {
  constructor(props) {
    super(props)
 
    // this.options = countryList().getData()
    this.options = countryList
 
    this.state = {
      options: this.options,
      value: null,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
  }
 
  render() {
    return (
      <Select
        options={this.state.options}
        value={this.state.value}
        onChange={this.props.setSearchParam}
      />
    )
  }
}

export default CountrySelector