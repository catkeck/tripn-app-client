function profileReducer(state = {username: "", coordinates: "", searchTerm: "", trips: [], showButton: false, isLoading: false}, action) {
  switch(action.type) {
    case "FETCHING_USER_DATA":
      return Object.assign({}, state, {isLoading: true})
    case "FETCHED_USER_DATA":
      return Object.assign({}, state, {username: action.payload.username, trips: action.payload.trips, isLoading: false })
    case "FETCHING_POSITION":
      return Object.assign({}, state, {isLoading: true})
    case "FETCHED_POSITION":
      console.log(action.payload)
      return Object.assign({}, state, {coordinates: `${action.payload.coords.latitude},${action.payload.coords.longitude}`, showButton: true, isLoading: false})
    case "SET_SEARCH_TERM":
      return Object.assign({}, state, {searchTerm: action.payload})
    default:
      return state
  }
}

export default profileReducer


