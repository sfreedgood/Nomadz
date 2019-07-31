import React from 'react'
// import Results from './results/index'
import { NavLink } from 'react-router-dom'
import Logo from './logo';
import("./header.css")

// import Home from './home';

function Header () {
  const fontSize = "1.5rem"

  return (
    <div className="header-nav">
      <div className="nav-container">
        <Logo fontSize={fontSize}/>
      </div>
      <div className="nav-container">
        <NavLink exact to="/" 
                id="home"
                activeClassName="selected"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  backgroundColor: "rgb(240,240,240)",
                  padding: "2vh 2vw",
        }}>Home</NavLink>
        <NavLink to="/results"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
            backgroundColor: "rgb(240,240,240)",
            padding: "2vh 2vw",
        }}>Results</NavLink>
        <NavLink to="/about"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
            backgroundColor: "rgb(240,240,240)",
            padding: "2vh 2vw",
        }}>About</NavLink>
      </div>
      {/* <Route exact path="/" render={() => <Home />} />
      <Route path="/results" render={() => <Results />} /> */}
    </div>
  )
}

export default Header