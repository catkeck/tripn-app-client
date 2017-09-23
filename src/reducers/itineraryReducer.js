function itineraryReducer(state = {activities: [], restaurants: [], weather: {}, isLoading: false, filtered: false}, action) {
  switch(action.type) {
    case "FETCHED_ACTIVITIES":
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
      return Object.assign({}, state, { weather: action.payload, isLoading: false })
    case "FILTER_ACTIVITIES":
    debugger
      return Object.assign({}, state, {filtered: true, activities: state.activities.filter((activity) => action.payload.indexOf(activity.name)<0)})
    default:
      return state
  }
}

export default itineraryReducer
