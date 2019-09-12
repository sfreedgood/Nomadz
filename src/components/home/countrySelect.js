import React from 'react';
import Select, { components } from 'react-select'
// import makeAnimated from 'react-select/animated'
// import countryList from 'react-select-country-list' //built-in options for all countries

// const animatedComponents = makeAnimated();

function CountrySelector (props) {

  const GroupHeading = props => (
    <div>
      <components.GroupHeading {...props} />
    </div>
  );

  return (
    <Select
      onChange={props.setSearchParam}
      components={{ GroupHeading }}
      options={props.countryOptions}
      isClearable={true}
      placeholder="Country"
      styles={{
        groupHeading: base => ({
          ...base,
          margin: '0 auto',
          padding: '5px 0',
          textAlign: 'center',
          fontSize: '1rem',
          color: 'rgb(150,150,150)',
          fontWeight: 'bolder',
          textDecoration: 'underline'
        }),
      }}
    />
  )
}

export default CountrySelector