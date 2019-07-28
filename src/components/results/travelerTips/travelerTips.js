import React from 'react'
import "../results.css"

function TravelerTips (props) {
  let regex = / /gi
  let countryURL
  let cityURL

  if (props.city){
    let city = props.city.label
    cityURL = city.toLowerCase().replace(regex, "-")
    let country = props.city.country || props.country.label
    countryURL = country.toLowerCase().replace(regex, "-")
  } else {
    let country = props.city.country || props.country.label
    countryURL = country.toLowerCase().replace(regex, "-")
  }
  
  if (cityURL === countryURL) cityURL = null // for places like Singapore, Singapore; reset values consistent with url links below

  return (
    <div className="nav-box gov-link">
      {
        countryURL && !cityURL &&
        <a href={`https://www.lonelyplanet.com/${countryURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="nav-box-text">Traveler Tips</h3>
        </a>
      }
      {
        cityURL &&
        <a href={`https://www.lonelyplanet.com/${countryURL}/${cityURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="nav-box-text">Traveler Tips</h3>
        </a>
      }
    </div>
  )
}

export default TravelerTips