import React from 'react'
import "../results.css"

function VisitACity (props) {
  let regex = / /gi
  let destination

  if (props.city){
    destination = props.city.label 
  } else {
     destination = props.country.label
  }

  let destinationURL = destination.toLowerCase().replace(regex, "-")

  return (
    <div className="nav-box result">
      <a href={`https://www.visitacity.com/en/${destinationURL}`} // if this causes links to fail, append the following onto the end of the url "/activities/all-activities"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="nav-box-text">THING TO DO & GUIDES</h3>

      </a>
    </div>
  )
}

export default VisitACity