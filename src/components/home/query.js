import React from "react"

export default function Query (props) {
  let queryTitle = props.query.charAt(0).toUpperCase() + props.query.slice(1) //Capitalizes only the first character, then concatenates rest of word (omitting first character)
  let queryOptions = props.queryData.map( (item, index) => <option key={index} id={item}>{item}</option>)
  return(
    <div className="query">
      <h1>{queryTitle}</h1>
      <select>
        {queryOptions}
      </select>
    </div>
  )
}