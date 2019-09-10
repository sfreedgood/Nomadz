import React from 'react';
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'

function CitySelector (props) {

  const Group = props => (
    <div>
      <components.Group {...props} />
    </div>
  );

  return (
    <Select
      components={{ Group }}
      isClearable={true}
      placeholder="City"
      onChange={props.setSearchParam}
      options={props.cities}
    />
  )
  
}

export default CitySelector