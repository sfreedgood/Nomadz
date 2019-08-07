import React from 'react'
import Logo from './logo.js';
import "./footer.css"

export default function Footer () {
  let fontSize;
  if (window.innerWidth > 600 ) {
    fontSize = "0.8rem"
  } else if ( window.innerWidth >= 400 ) {
    fontSize = "0.6rem"
  } else {
    fontSize = "0.2rem"
  }

  return (
    <div className="footer">
      <div className="left">
        <p className="copyright">&copy; Copyright 2019</p>
        <Logo fontSize={fontSize} />
        <p>Travel.</p>
        <p>All Rights Reserved.</p>
      </div>
        <a href="https://samfreedgood.dev" target="_blank" rel="noopener noreferrer">
          <p>Built by: Sam Freedgood</p>
        </a>
    </div>
  )
}