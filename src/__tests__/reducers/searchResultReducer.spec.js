import searchResultReducer from '../../reducers/searchResultReducer'
import { FETCH_SEARCH_RESULT } from '../../actions/actionTypes'

const setup = () => {
  const initialState = []
  return {
    initialState
  }
}

describe('searchResultReducer', () => {
  it('should return the initial state', () => {
    const { initialState } = setup()
    expect(searchResultReducer([], {})).toEqual(initialState)
  })

  it('should return the payload for FETCH_SEARCH_RESULT', () => {
    const action = { type: FETCH_SEARCH_RESULT, payload: { resultList: 1 } }
    const expectedData = { resultList: 1 }
    expect(searchResultReducer([], action)).toEqual(expectedData)
  })

  it('should return initialState if action type is not found', () => {
    const { initialState } = setup()
    const action = { type: 'NON_EXIST_TYPE', payload: { resultList: 1 } }
    expect(searchResultReducer([], action)).toEqual(initialState)
  })
})
