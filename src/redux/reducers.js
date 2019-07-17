import { combineReducers} from "redux"
const moment = require("moment")

const months = moment.months()
const prices = generatePrices(500, 10000) //first parameter sets the price range, second parameter sets maximum price of the list

function generatePrices (stepRange, upperLimit) {
  let prices = []
  for (let i = 0; i <= upperLimit; i += stepRange) {
    prices.push(`$${i}-$${i + stepRange - 1}`)
  }
  return prices
}

const initialState = {
  test: false,
  searchQueries: {
    where: ["Anywhere", "North America", "South America", "Europe", "Asia/Pacific", "Africa", "Middle East"],
    when: ["Anytime", ...months],
    budget: ["Any", ...prices],
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

const searchParams = (state = null, action) => {
  switch(action.type) {
    case "SET_LOCATION":
      const { location } = action.payload
      return {
        ...state, location: location
      }
    case "SET_DATES":
      const { dates } = action.payload
      return {
        ...state, dates: dates
      }
    case "SET_BUDGET":
      const { budget } = action.payload
      return {
        ...state, budget
      }
    case "SET_DURATION":
      const { duration } = action.payload
      return {
        ...state, duration
      }
    default:
      return state
  }
}

export default combineReducers({
  setup,
  searchParams
})