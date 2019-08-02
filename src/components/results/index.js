import React, { Component } from "react"
import SkyscannerMultiVerticalWidget from "../widgets/skyscannerMultiVerticalWidget";
import Budget from "./budget/budget"
import GovInfo from "./gov/index"
import VisitACity from "./visitACity/visitACity"
import TravelerTips from "./travelerTips/travelerTips";

import "./results.css"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { country, city, budget, duration, dates } = state.searchParams
  return { country, city, budget, duration, dates }
};

class Results extends Component {
  state = {
    type: null
  }

  handleClick = (event) => {
    event.persist()
    let target = event.currentTarget.id
    this.toggleSkyscanner(target)
    
    this.setState(prevState => ({
      type: target
    }))
  }

  toggleSkyscanner = (target_id) => {
    let target = document.getElementById("skyscanner-widget")
    console.log(target)
    if ( target_id === "skyscanner" && target.style.display === "none") {
      target.style.display = "block"
    } else {
      target.style.display = "none"
    }
  }

  render () {
    return(
        <div className="results">
          <div className="results-header">
          {
            this.props.city &&
            <h1 className="result-header-text">{this.props.city.label},</h1>
          }
          {
            this.props.country &&
            <h1 className="result-header-text">{this.props.country.country || this.props.country.label}</h1>
          }
          </div>
          <div className="nav-box-container">

            <div onClick={this.handleClick} id="skyscanner" className="nav-box result">
                <h3 className="nav-box-text">FLIGHTS & ACCOMMODATION</h3>
            </div>
            
            {
              this.props.country
                ?
                <div onClick={this.handleClick} id="budget" className="nav-box result" to="/results/budget">
                  <h3 className="nav-box-text">BUDGETING</h3>
                </div>
                :
                <div className="nav-box no-content-error">Please Enter More Information</div>
            }

            {
              (this.props.country || this.props.city) &&
              <VisitACity country={this.props.country} city={this.props.city} />
            }

            {
              (this.props.country || this.props.city) &&
              <TravelerTips country={this.props.country} city={this.props.city} />
            }

            {
              this.props.country
                ?
                <div onClick={this.handleClick} id="gov" className="nav-box result" to="/results/gov">
                  <h3 className="nav-box-text">HEALTH, SAFETY & VISAS</h3>
                  {/* <h3 className="nav-box-text">Safety</h3>
                  <h3 className="nav-box-text">Visas</h3> */}
                </div>
                :
                <div className="nav-box no-content-error">Please Enter More Information</div>
            }
          </div>
          <div className="results-display">
            <SkyscannerMultiVerticalWidget />

            {
              this.state.type === "gov" &&
              <GovInfo />
            }
                        
            {
              this.state.type === "budget" &&
              <Budget country={this.props.country} city={this.props.city} />
            }
            </div>
        </div>
    )
  }
}
export default connect(
  mapStateToProps
)(Results)