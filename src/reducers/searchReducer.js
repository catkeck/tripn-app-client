function searchReducer(state = {coordinates: "", searchTerm: "", showButton: false, isLoading: false}, action) {
  switch(action.type) {
    case "FETCHING_POSITION":
      return Object.assign({}, state, {isLoading: true})
    case "FETCHED_POSITION":
      return Object.assign({}, state, {coordinates: `${action.payload.coords.latitude},${action.payload.coords.longitude}`, showButton: true, isLoading: false})
    case "SET_SEARCH_TERM":
      return Object.assign({}, state, {searchTerm: action.payload})
    default:
      return state
  }
}

export default searchReducer


