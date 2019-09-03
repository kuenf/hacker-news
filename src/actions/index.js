import algolia from '../apis/algolia'
import { FETCH_SEARCH_RESULT } from './actionTypes'

export const fetchSearchResult = (searchTerm, page) => async dispatch => {
  if (searchTerm !== undefined) {
    if (page === undefined) {
      page = 0
    }
    const response = await algolia.get(`/search?query=${searchTerm}&page=${page}`)
    dispatch({ type: FETCH_SEARCH_RESULT, payload: response.data })
  }
}
