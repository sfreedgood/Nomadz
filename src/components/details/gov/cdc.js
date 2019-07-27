import React from 'react'

function CDCinfo (props) {

  return (
    <div className="gov-link">
      <a href={`https://`}>
        CDC Information for {props.country.label}
      </a>
    </div>
  )
}

export default CDCinfo