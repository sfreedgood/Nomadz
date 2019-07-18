import React from "react"
import Query from "./query"

//Redux
import { connect } from "react-redux"
import CountrySelector from "./countrySelect";

function mapStateToProps (state) {
  const { searchQueries } = state.setup
  console.log(state)
  const { location, budget, duration, dates } = state.searchParams
  return { searchQueries, location, budget, duration, dates }
};

// function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
//   return {
//     test: (testVal) => dispatch({type: "SEARCH_QUERIES", payload: {searchQueries: "Where"}}), 
//   }
// }

const Home = (props) => {
  const queryOptions = Object.keys(props.searchQueries)
  const queryData = props.searchQueries

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

  const handleSubmit = () => {
    let searchData = {
      duration: props.duration,
      location: props.location,
      budget: props.budget,
      dates: props.dates
    }
    console.log(searchData)
  }

  return(
    <div className="home-container">
      <h1 className="home-header">Let's start something special</h1>
      <CountrySelector />
      {allQueries}
      <button type="submit" onClick={handleSubmit} >LET'S GO</button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home)