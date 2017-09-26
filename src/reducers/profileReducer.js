function profileReducer(state = {username: "", trips: [], isLoading: false, activities: [], image: "", interests: ""}, action) {
  switch(action.type) {
    case "FETCHING_USER_DATA":
      return Object.assign({}, state, {isLoading: true})
    case "FETCHED_USER_DATA":
      return Object.assign({}, state, {username: action.payload.username, trips: action.payload.trips, image: action.payload.image, activities: action.payload.activities, interests: action.payload.interests, isLoading: false })
    case "SET_PROFILE_IMAGE":
      return Object.assign({}, state, {image: action.payload})
    case "SET_INTERESTS":
      return Object.assign({}, state, {interests: action.payload})
    default:
      return state
  }
}

export default profileReducer


