import React from "react"
import FlightSearchWidget from "../widgets/skyscannerFlights";
import BudgetWidget from "../widgets/budgetWidget";
import { BrowserRouter as Router, withRouter, Link, Route } from "react-router-dom"

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
        <Router>
        {
          props.city
            ?
            <Link id="flights" className="result" to="/flightSearchWidget">
                Flights to {`${props.city.label}`}
            </Link>
            :
            <div className="no-content-error">Please enter a City to see flights</div>
        }
        {
          props.country
            ?
            <Link id="budget" className="result" to="/budgetWidget">
              Budget for {`${props.country.label}`}
            </Link>
            :
            <div className="no-content-error">Please Enter More Information</div>
        }
        {
          props.country
          ?
          <Link id="gov" className="result" to="/gov">
            Governmental Info for {`${props.country.label}`}
          </Link>
          :
          <div className="no-content-error">Please Enter More Information</div>
        }

        <Route path="/gov"
          render={() => <FlightSearchWidget city={props.city}/>}
        />
        <Route path="/flightSearchWidget"
          render={() => <FlightSearchWidget city={props.city}/>}
        />
        <Route path="/budgetWidget"
          render={() => <BudgetWidget country={props.country} city={props.city} />}
        />
        </Router>
      </div>
  )
}
export default withRouter(connect(
  mapStateToProps
)(Results))