import React from 'react';
import Select from 'react-select'

function CitySelector (props) {

  return (
    <Select
      options={props.cities}
      onChange={props.setSearchParam}
      isClearable={true}
      placeholder="City"
    />
  )
  
}

export default CitySelector