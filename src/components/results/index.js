import React from "react"
import FlightSearchWidget from "../widgets/skyscannerFlights";
import BudgetWidget from "../widgets/budgetWidget";
import GovInfo from "./gov/index"
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
      <div className="nav-box-container results">
        <Router>
        {
          props.city
            ?
            <Link id="flights" className="nav-box result" to="/flightSearchWidget">
                Flights to {`${props.city.label}`}
            </Link>
            :
            <div className="nav-box no-content-error">Please enter a City to see flights</div>
        }
        {
          props.country
            ?
            <Link id="budget" className="nav-box result" to="/budgetWidget">
              Budget for {`${props.country.label}`}
            </Link>
            :
            <div className="nav-box no-content-error">Please Enter More Information</div>
        }
        {
          props.country
            ?
            <Link id="gov" className="nav-box result" to="/gov">
              Governmental Info for {`${props.country.label}`}
            </Link>
            :
            <div className="nav-box no-content-error">Please Enter More Information</div>
        }

        <Switch>
          <Route path="/gov"
            component={() => <GovInfo /> }
          />
          <Route path="/flightSearchWidget"
            component={() => <FlightSearchWidget city={props.city}/>}
          />
          <Route path="/budgetWidget"
            component={() => <BudgetWidget country={props.country} city={props.city} />}
          />
        </Switch>
        </Router>

      </div>
  )
}
export default withRouter(connect(
  mapStateToProps
)(Results))