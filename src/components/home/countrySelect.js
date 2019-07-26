import React, { Component } from 'react';
import Select from 'react-select'
// import countryList from 'react-select-country-list' //built-in options for all countries
import countryList from "../../redux/countryList" //custom made options for use with budget widget

//redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { country, city } = state.searchParams
  return { country, city }
}

class CountrySelector extends Component {
  constructor(props) {
    super(props)
 
    // this.options = countryList().getData() // for use with the full country list. Note: this may break the budgeting functions
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
    // console.log(this.state.options)
    return (
      <Select
        options={this.state.options}
        value={this.state.value}
        onChange={this.props.setSearchParam}
        placeholder="Country"
      />
    )
  }
}

export default connect(
  mapStateToProps
)(CountrySelector)