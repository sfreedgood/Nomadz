// Action Types
const TEST = "TEST"

// Action Creators
function test(val) {
  return {
    type: TEST,
    payload: {
      test: val
    }
  }
}

export default test