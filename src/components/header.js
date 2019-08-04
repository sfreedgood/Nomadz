import React from 'react'
// import Results from './results/index'
import { NavLink } from 'react-router-dom'
import Logo from './logo.js';
import("./header.css")

// import Home from './home';

function Header () {
  const fontSize = "1.5rem"

  return (
    <div className="header-nav">
      <div className="nav-container">
      <NavLink exact to="/" 
                id="home"
                activeClassName="selected"
        ><Logo fontSize={fontSize}/></NavLink>
      </div>
      <div className="nav-container">
        <NavLink exact to="/" 
                id="home"
                activeClassName="selected"
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  padding: "2vh 0",
        }}>Home</NavLink>
        <NavLink to="/results"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            textDecoration: "underline",
            padding: "2vh 0",
        }}>Results</NavLink>
        <NavLink to="/about"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            textDecoration: "underline",
            padding: "2vh 0",
        }}>About</NavLink>
      </div>
      {/* <Route exact path="/" render={() => <Home />} />  */}
      {/* <Route path="/results" render={() => <Results />} />  */}
    </div>
  )
}

export default Header