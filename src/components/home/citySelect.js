import React from 'react';
import Select from 'react-select'

function CitySelector (props) {

  return (
    <Select
      options={props.cities}
      onChange={props.setSearchParam}
      placeholder="City"
    />
  )
  
}

export default CitySelector