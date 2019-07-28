import React, { Component } from "react"
// import FlightSearchWidget from "../widgets/skyscannerFlights";
// import HotelSearchWidget from "../widgets/hotelWidget";
import SkyscannerMultiVerticalWidget from "../widgets/skyscannerMultiVerticalWidget";

// import BudgetWidget from "../widgets/budgetWidget";
import Budget from "./budget/budget"
import GovInfo from "./gov/index"
import VisitACity from "./visitACity/visitACity"
import TravelerTips from "./travelerTips/travelerTips";

import "./results.css"
import { BrowserRouter as Router, Switch, withRouter, NavLink, Route } from "react-router-dom"

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
    this.setState(prevState => ({
      type: target
    }))
  }

  render () {
    console.log(this.state)
    return(
        <div className="results">
          <div className="results-header">
          {
            this.props.city &&
            <h1 id="result-header-city">{this.props.city.label},</h1>
          }
          {
            this.props.country &&
            <h1 id="result-header-country">{this.props.country.country || this.props.country.label}</h1>
          }
          </div>
          <div className="nav-box-container">
            {/* <Router> */}
            {
              this.props.city
                ?
                <div onClick={this.handleClick} id="skyscanner" className="nav-box result">
                    <h3 className="nav-box-text">Flights</h3>
                    <h3 className="nav-box-text">Accommodation</h3>
                    <h3 className="nav-box-text">Transportation</h3>
                </div>
                :
                <div className="nav-box no-content-error">Please enter a City to see flights</div>
            }
            {/* {
              this.props.city
                ?
                <div onClick={this.handleClick} id="hotel" className="nav-box result" to="/hotelSearchWidget">
                    Accommodation
                </div>
                :
                <div className="nav-box no-content-error">Please enter a City to see flights</div>
            } */}
            {
              this.props.country
                ?
                <div onClick={this.handleClick} id="budget" className="nav-box result" to="/results/budget">
                  <h3 className="nav-box-text">Budgeting</h3>
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
                  <h3 className="nav-box-text">Health</h3>
                  <h3 className="nav-box-text">Safety</h3>
                  <h3 className="nav-box-text">Visas</h3>
                </div>
                :
                <div className="nav-box no-content-error">Please Enter More Information</div>
            }
          </div>
          <div className="results-display">
            {
              this.state.type === "gov" &&
              <GovInfo />
            }
            {
              this.state.type === "skyscanner" &&
              <SkyscannerMultiVerticalWidget city={this.props.city} />
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