import React from 'react'
import "../results.css"

function VisaInfo (props) {
  let regex = / /gi
  let country = props.country.country || props.country.label
  let countryName = country.replace(regex, "")
  console.log(countryName)  

  return (
    <div className="nav-box gov-link">
      <a href={`https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/${countryName}.html`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visa Information for {props.country.label}
      </a>
    </div>
  )
}

export default VisaInfo