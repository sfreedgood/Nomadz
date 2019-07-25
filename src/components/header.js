import React from 'react'
// import Results from './results/index'
import { Link } from 'react-router-dom'
// import Home from './home';

function Header () {

  return (
    <div className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/results">Results</Link>
      {/* <Route exact path="/" render={() => <Home />} />
      <Route path="/results" render={() => <Results />} /> */}
    </div>
  )
}

export default Header