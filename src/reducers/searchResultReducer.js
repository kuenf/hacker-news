import { FETCH_SEARCH_RESULT } from '../actions/actionTypes'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT:
      return action.payload
    default:
      return state
  }
}
