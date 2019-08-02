import React from "react"
import "./logo.css"

export default function Logo (props) {
  
  const fontSize = {
    fontSize: props.fontSize || "2rem", //allows fontSize to be scaled by parent if needed
  }

  return (
    <div id="logo" style={fontSize}>
      <h1 id="nomad" style={fontSize}>NOMAD</h1>
      <h1 id="z" style={fontSize}>Z</h1>
    </div>
  )
}
