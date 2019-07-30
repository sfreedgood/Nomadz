import React from "react"

export default function Logo (props) {
  const container = {
    display: 'flex',
  }

  const nomad = {
    color: 'black',
    display: 'flex',
    fontSize: props.fontSize || "2rem", //allows fontSize to be scaled by parent if needed
    margin: 0,
  }

  const z = {
    color: 'black',
    display: 'flex',
    textDecoration: 'underline',
    fontStyle: "italic",
    fontSize: props.fontSize || "2rem",
    verticalAlign: "text-top",
    margin: 0,

  }

  return (
    <div className="logo" style={container}>
      <h1 style={nomad}>NOMAD</h1>
      <h1 style={z}>Z</h1>
    </div>
  )
}