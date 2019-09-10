import React from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
// import countryList from 'react-select-country-list' //built-in options for all countries

const animatedComponents = makeAnimated();

function CountrySelector (props) {

  return (
    <Select
      onChange={props.setSearchParam}
      components={animatedComponents}
      options={props.countryOptions}
      isClearable={true}
      placeholder="Country"
    />
  )
}

export default CountrySelector