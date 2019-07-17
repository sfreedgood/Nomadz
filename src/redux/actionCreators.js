// Action Types
const TEST = "TEST"
const SET_DURATION = "SET_DURATION"
const SET_BUDGET = "SET_BUDGET"
const SET_DATES = "SET_DATES "
const SET_LOCATION = "SET_LOCATION"

// Action Creators
function test(val) {
  return {
    type: TEST,
    payload: {
      test: val
    }
  }
}

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

function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: {
      location
    }
  }
}

export default {
  test,
  setDates,
  setLocation,
  setDuration,
  setBudget
}