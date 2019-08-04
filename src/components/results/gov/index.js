import React from 'react'
import VisaInfo from './visas.js';
import CDCinfo from './health.js';
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
    <div className="gov-link">

      <VisaInfo country={props.country} />
      <CDCinfo country={props.country} />

    </div>
  )
}

export default connect(
  mapStateToProps
)(GovInfo)