// Action Types
const TEST = "TEST"

// Action Creators
function test(val) {
  return {
    type: TEST,
    payload: {
      message: val
    }
  }
}

export default {
  test
}