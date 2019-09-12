import React from 'react';
import Select, { components } from 'react-select'

function CitySelector (props) {

  const GroupHeading = props => (
    <div>
      <components.GroupHeading {...props} />
    </div>
  );

  return (
    <Select
      options={props.cityOptions}
      components={{ GroupHeading }}
      isClearable={true}
      placeholder="City"
      onChange={props.setSearchParam}
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

export default CitySelector