function itineraryReducer(state = {activities: [], restaurants: [], weather: {},isLoading: false}, action) {
  switch(action.type) {
    case "FETCHED_ACTIVITIES":
      console.log(action.payload)
      return Object.assign({}, state, { activities: action.payload, isLoading: false } )
    case "FETCHING_ACTIVITIES":
      return Object.assign({}, state, { isLoading: true})
    case "FETCHED_RESTAURANTS":
      return Object.assign({}, state, { restaurants: action.payload, isLoading: false})
    case "FETCHING_RESTAURANTS":
      return Object.assign({}, state, { isLoading: true})
    case "REMOVE_ACTIVITY":
      return Object.assign({}, state, {activities: state.activities.filter((element) => element.name !== action.payload)})
    case "REMOVE_RESTAURANT":
      return Object.assign({}, state, {restaurants: state.restaurants.filter((element) => element.name !== action.payload)})
    case "FETCHING_WEATHER":
      return Object.assign({}, { isLoading: true })
    case "FETCHED_WEATHER":
    console.log("REDUCER WEATHER", action.payload)
      return Object.assign({}, state, { weather: action.payload, isLoading: false })
    default:
      return state
  }
}

export default itineraryReducer
