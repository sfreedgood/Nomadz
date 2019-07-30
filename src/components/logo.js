import React from "react"

export default function Logo () {
  const container = {
    display: 'inline',
  }

  const nomad = {
    color: 'black',
    display: 'inline',
    fontSize: "2rem",

  }

  const z = {
    color: 'black',
    display: 'inline',
    textDecoration: 'underline',
    fontStyle: "italic",
    fontSize: "2rem",
    verticalAlign: "text-top",
  }

  return (
    <div className="logo" style={container}>
      <h1 style={nomad}>NOMAD</h1>
      <h1 style={z}>Z</h1>
    </div>
  )
}