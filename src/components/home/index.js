import React from "react"
import Query from "./query"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { searchQueries } = state.setup
  const { location, budget, duration, dates } = state.searchParams
  console.log(location)

  return { searchQueries, location, budget, duration, dates }
};

// function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
//   return {
//     setDestinationOptions: (countryList) => dispatch({type: "SET_DESTINATION_OPTIONS", payload: {countryList}}), 
//   }
// }

const Home = (props) => {
  const queryOptions = Object.keys(props.searchQueries)
  const queryData = props.searchQueries
  console.log(queryData)

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
      {allQueries}
      <button type="submit" onClick={handleSubmit} >LET'S GO</button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home)