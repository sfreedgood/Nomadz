import React from 'react'

function VisaInfo (props) {

  return (
    <div className="gov-link">
      <a href={`https://`}>
        Visa Information for {props.country.label}
      </a>
    </div>
  )
}

export default VisaInfo