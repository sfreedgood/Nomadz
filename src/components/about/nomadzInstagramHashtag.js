import React from 'react'
import Logo from '../logo.js'

export default function NomadzTwitter (props) {
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
    <a style={aStyle} id="hashtag-we-are-nomadz" href="https://www.instagram.com/explore/tags/wearenomadz/" target="_blank" rel="noopener noreferrer">
      <h4 style={h4Style}>#WeAre</h4>
      <Logo fontSize={props.fontSize}/>
    </a>
  )
}