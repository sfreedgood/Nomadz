import React from "react"
import Query from "./query"

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { searchQueries } = state.setup
  return { searchQueries }
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

  return(
    <div className="home-container">
      {allQueries}
    </div>
  )
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home)