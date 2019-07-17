// Action Types
const TEST = "TEST"
const GET_SEARCH_QUERIES = "GET_SEARCH_QUERIES"

// Action Creators
function test(val) {
  return {
    type: TEST,
    payload: {
      test: val
    }
  }
}

// function getSearchQueries() {
//   return {
//     type: GET_SEARCH_QUERIES,
//     payload: {
//       searchQueries: {
//         where: ["anywhere", "North America", "South America", "Europe", "Asia/Pacific", "Africa", "Middle East"],
//         when: ["anytime"],
//         budget: ["any"],
//         duration: ["any"]
//       }
//     }
//   }
// }

export default {
  test,
  // getSearchQueries
}