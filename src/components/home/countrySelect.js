import React from 'react';
import Select from 'react-select'
// import countryList from 'react-select-country-list' //built-in options for all countries
import countryList from "../../redux/countryList.js" //custom made options for use with budget widget

function CountrySelector (props) {
    return (
      <Select
        onChange={props.setSearchParam}
        options={countryList}
        placeholder="Country"
      />
    )
}

export default CountrySelector