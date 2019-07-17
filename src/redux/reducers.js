import { combineReducers} from "redux"

const initialState = {
  test: false
}

const setup = (state = initialState, action) => {
  switch(action.type) {
    case "TEST":
      const { test } = action.payload
      return {
        ...state, test: test
      }
    default:
      return state
  }
}

export default combineReducers({
  setup: setup
})