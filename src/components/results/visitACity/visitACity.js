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
  console.log('visit a city')

  let destinationURL = destination.toLowerCase().replace(regex, "-")

  return (
    <div className="nav-box gov-link">
      <a href={`https://www.visitacity.com/en/${destinationURL}/activities/all-activities`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="nav-box-text">Things To Do</h3>
        <h3 className="nav-box-text"> & </h3>
        <h3 className="nav-box-text">Guides</h3>
      </a>
    </div>
  )
}

export default VisitACity



// https://www.visitacity.com/en/argentina/activities/all-activities