import React from 'react'
// import Results from './results/index'
import { NavLink } from 'react-router-dom'
// import Home from './home';

function Header () {

  return (
    <div className="header-nav">
      <NavLink exact to="/" 
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
      }}>Home</NavLink>
      <NavLink to="/results"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
      }}>Results</NavLink>
      {/* <Route exact path="/" render={() => <Home />} />
      <Route path="/results" render={() => <Results />} /> */}
    </div>
  )
}

export default Header