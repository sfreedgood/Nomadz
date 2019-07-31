import React from 'react'
import Logo from './logo';
import "./footer.css"

export default function Footer () {
  const fontSize = "0.8rem"

  return (
    <div className="footer">
      <p className="copyright">&copy; Copyright 2019</p>
      <Logo fontSize={fontSize} />
      <p>Travel</p>
      <p>All Rights Reserved</p>
    </div>
  )
}