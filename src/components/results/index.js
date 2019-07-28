import React from "react"
import FlightSearchWidget from "../widgets/skyscannerFlights";
import HotelSearchWidget from "../widgets/hotelWidget";
import SkyscannerMultiVerticalWidget from "../widgets/skyscannerMultiVerticalWidget";

import BudgetWidget from "../widgets/budgetWidget";
import Budget from "./budget/budget"
import GovInfo from "./gov/index"
import VisitACity from "./visitACity/visitACity"
import TravelerTips from "./travelerTips/travelerTips";

import "./results.css"
import { BrowserRouter as Router, Switch, withRouter, Link, Route } from "react-router-dom"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  // const { searchQueries } = state.setup
  const { country, city, budget, duration, dates } = state.searchParams
  return { country, city, budget, duration, dates }
};

function Results(props) {

  return(
      <div className="results">
        <div className="results-header">
        {
          props.city &&
          <h1 id="result-header-city">{props.city.label},</h1>
        }
        {
          props.country &&
          <h1 id="result-header-country">{props.country.country || props.country.label}</h1>
        }
        </div>
        <div className="nav-box-container">
          <Router>
          {
            props.city
              ?
              <Link id="flights" className="nav-box result" to="/skyscannerWidget">
                  Flights, Accommodation & Transportation
              </Link>
              :
              <div className="nav-box no-content-error">Please enter a City to see flights</div>
          }
          {/* {
            props.city
              ?
              <Link id="hotel" className="nav-box result" to="/hotelSearchWidget">
                  Accommodation
              </Link>
              :
              <div className="nav-box no-content-error">Please enter a City to see flights</div>
          } */}
          {
            props.country
              ?
              <Link id="budget" className="nav-box result" to="/budget">
                Budgeting
              </Link>
              :
              <div className="nav-box no-content-error">Please Enter More Information</div>
          }

          {
            (props.country || props.city) &&
            <VisitACity country={props.country} city={props.city} />
          }

          {
            (props.country || props.city) &&
            <TravelerTips country={props.country} city={props.city} />
          }

          {
            props.country
              ?
              <Link id="gov" className="nav-box result" to="/gov">
                Health, Safety & Visas
              </Link>
              :
              <div className="nav-box no-content-error">Please Enter More Information</div>
          }

            <Switch>

              <Route exact path="/gov"
                component={() => <GovInfo /> }
              />
              <Route exact path="/sckyscannerWidget"
                component={() => <SkyscannerMultiVerticalWidget city={props.city}/>}
              />
              {/* <Route exact path="/hotelSearchWidget"
                component={() => <SkyscannerMultiVerticalWidget city={props.city}/>}
              /> */}
              <Route exact path="/budget"
                component={() => <Budget country={props.country} city={props.city} />}
              />
            </Switch>
          </Router>
        </div>
      </div>
  )
}
export default withRouter(connect(
  mapStateToProps
)(Results))