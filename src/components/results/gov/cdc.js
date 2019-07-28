import React from 'react'
import "../results.css"


function CDCinfo (props) {
  let regex = / /gi
  let countryName = props.country.label.toLowerCase().replace(regex, "-")
  console.log(countryName)

  return (
    <div className="nav-box gov-link">
      <a href={`https://wwwnc.cdc.gov/travel/destinations/traveler/none/${countryName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        CDC Information for {props.country.label}
      </a>
    </div>
  )
}

export default CDCinfo