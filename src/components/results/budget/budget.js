import React from 'react'
import "../results.css"

function Budget (props) {
  let regex = / /gi
  let city = props.city.label
  let country = props.city.country || props.country.label

  let countryURL
  let cityURL

  if (props.city){
    cityURL = city.toLowerCase().replace(regex, "-")
    countryURL = country.toLowerCase().replace(regex, "-")
  } else {
    countryURL = country.toLowerCase().replace(regex, "-")
  }
  console.log('visit a city')

  return (
    <div className="nav-box gov-link">
      {
        countryURL &&
        <a href={`https://www.budgetyourtrip.com/${countryURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Budget for {country} 
        </a>
      }
      {
        cityURL &&
        <a href={`https://www.budgetyourtrip.com/${countryURL}/${cityURL}-${countryURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Budget for {city}
        </a>
      }
    </div>
  )
}

export default Budget