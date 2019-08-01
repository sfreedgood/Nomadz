import React from "react"
import "./home.css"
import Query from "./query"
import Results from "../results/index";
import LocationSelectors from "./locationSelect"
import { withRouter, Switch, Link, Route } from "react-router-dom"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { searchQueries } = state.setup
  const { country, city, budget, duration, dates } = state.searchParams
  // console.log(country)

  return { searchQueries, country, city, budget, duration, dates }
};

// function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
//   return {
//     setDestinationOptions: (countryList) => dispatch({type: "SET_DESTINATION_OPTIONS", payload: {countryList}}), 
//   }
// }

const Home = (props) => {
  const queryOptions = Object.keys(props.searchQueries)
  const queryData = props.searchQueries
  // console.log(queryData)

  let allQueries = queryOptions.map( (queryOption, index) => {
    return (
      <Query
        id={queryOption}
        key={index}
        query={ queryOption }
        queryData={ queryData[queryOption] }
      />
    )
  })

  console.log(props)

  return(
    <div className="home-container">
      <h1 className="home-header">Let's start something special</h1>
        <div className="content">
          <div className="location-display">
          {
            props.city && // if there is a city, show the city name
            <h3 className="current-selection">
              {props.city.label},
            </h3>
          }
          {
            props.city && // if there is a city, show the city country
            <h3 className="current-selection">
              {props.city.country}
            </h3>
          }
          {
            props.country && !props.city && // if there is a country, but not a city, show the country
            <h3 className="current-selection">
              {props.country.label}
            </h3>
          }
          </div>
          <div className="query-container">
            <LocationSelectors />
            {allQueries}
          </div>
        </div>
        <button>
          <Link to="/results">
            LET'S GO
          </Link>
        </button>

        {/* <Switch>
          <Route path="/results" component={ Results }/>
        </Switch> */}
    </div>
  )
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home)