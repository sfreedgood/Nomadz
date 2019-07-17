import { combineReducers} from "redux"

const initialState = {
  test: false,
  searchQueries: {
    where: ["Anywhere", "North America", "South America", "Europe", "Asia/Pacific", "Africa", "Middle East"],
    when: ["Anytime"],
    budget: ["Any"],
    duration: ["Any"]
  }
}

const setup = (state = initialState, action) => {
  switch(action.type) {
    case "TEST":
      const { test } = action.payload
      return {
        ...state, test: test
      }
    // case "":
    //   const { } = action.payload
    //   return { }
    default:
      return state
  }
}

export default combineReducers({
  setup,
})