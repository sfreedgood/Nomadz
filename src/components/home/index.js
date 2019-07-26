import React from "react"
import "./home.css"
import Query from "./query"
import LocationSelectors from "./locationSelect"

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
      <div className="query-container">
        <LocationSelectors />
        {allQueries}
      </div>
      <button type="submit" onClick={props.handleSubmit} >LET'S GO</button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home)