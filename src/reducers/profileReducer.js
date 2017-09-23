function profileReducer(state = {username: "", coordinates: "", searchTerm: "", trips: [], showButton: false, isLoading: false, file: "", activities: []}, action) {
  switch(action.type) {
    case "FETCHING_USER_DATA":
      return Object.assign({}, state, {isLoading: true})
    case "FETCHED_USER_DATA": 
    console.log("in profileReducer",action.payload.activities)
      return Object.assign({}, state, {username: action.payload.username, trips: action.payload.trips, file: action.payload.image, activities: action.payload.activities, isLoading: false })
    case "FETCHING_POSITION":
      return Object.assign({}, state, {isLoading: true})
    case "FETCHED_POSITION":
      return Object.assign({}, state, {coordinates: `${action.payload.coords.latitude},${action.payload.coords.longitude}`, showButton: true, isLoading: false})
    case "SET_SEARCH_TERM":
      return Object.assign({}, state, {searchTerm: action.payload})
    case "SET_PROFILE_IMAGE":
      return Object.assign({}, state, {file: action.payload.base64})
    default:
      return state
  }
}

export default profileReducer


