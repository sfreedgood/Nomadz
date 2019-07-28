import React from 'react'
import {BrowserRouter as Router, withRouter, Route, Link} from 'react-router-dom'
import VisaInfo from './visas';
import CDCinfo from './cdc';
import "../results.css";

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { country } = state.searchParams
  return { country }
};

function GovInfo (props) {
  console.log("I'm here")

  return (
    <div className="nav-box-container gov">
      <Router>
        <Link to="/visas" className="nav-box">
          {props.country.label} Visa Information
        </Link>
        <Link to="/cdc" className="nav-box">
          {props.country.label} CDC Information
        </Link>

    
        <Route path="/visas"
          render={() => <VisaInfo country={props.country} />}
        />
        <Route path="/cdc"
          render={() => <CDCinfo country={props.country} />}
        />

      </Router>
    </div>
  )
}

export default withRouter(connect(
  mapStateToProps
)(GovInfo))