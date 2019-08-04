import React from 'react'
import Logo from '../logo.js'

export default function NomadzInstagram (props) {
  const aStyle = {
    display: "flex",
    justifyContent: "center",
  }

  const h4Style = {
    fontSize: props.fontSize || "1rem", //allows component to be scaled by parent
    color: "black",
    padding: "0",
    margin: "0",
  }

  return (
    <a style={aStyle} id="hashtag-we-are-nomadz" href="https://www.instagram.com/nomadztravel/?hl=en" target="_blank" rel="noopener noreferrer">
      <h4 style={h4Style}>@</h4>
      <Logo fontSize={props.fontSize}/>
      <h4 style={h4Style}>TRAVEL</h4>
    </a>
  )
}