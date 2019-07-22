// Action Types
// const TEST = "TEST"
const SET_DURATION = "SET_DURATION"
const SET_BUDGET = "SET_BUDGET"
const SET_DATES = "SET_DATES"
const SET_COUNTRY = "SET_COUNTRY"
const SET_CITY = "SET_CITY"

// Action Creators
// function test(val) {
//   return {
//     type: TEST,
//     payload: {
//       test: val
//     }
//   }
// }

function setDuration(duration) {
  return {
    type: SET_DURATION,
    payload: {
      duration
    }
  }
}

function setBudget(budget) {
  return {
    type: SET_BUDGET,
    payload: {
      budget
    }
  }
}

function setDates(dates) {
  return {
    type: SET_DATES,
    payload: {
      dates
    }
  }
}

function setCountry(country) {
  return {
    type: SET_COUNTRY,
    payload: {
      country
    }
  }
}

function setCity(city) {
  return {
    type: SET_CITY,
    payload: {
      city
    }
  }
}

export default {
  test,
  setDates,
  setCity,
  setCountry,
  setDuration,
  setBudget,
}