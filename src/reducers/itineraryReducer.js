function itineraryReducer(state = {activities: [], restaurants: [], weather: {}, isLoading: false, filtered: false, fetchable: true, badWeather: false, location: "", moreActivities: true, moreRestaurants: true}, action) {
  switch(action.type) {
    case "FETCHED_ACTIVITIES":
      return Object.assign({}, state, { activities: action.payload, isLoading: false} )
    case "FETCHING_ACTIVITIES":
      return Object.assign({}, state, { isLoading: true })
    case "ADD_ACTIVITIES":
      const activityLength = action.payload === undefined ? 0 :  action.payload.length === 50
      return Object.assign({}, state, {activities: state.activities.concat(action.payload), moreActivities: activityLength})
    case "FETCHED_RESTAURANTS": 
      return Object.assign({}, state, { restaurants: action.payload, isLoading: false, moreRestaurants: restaurantLength})
    case "FETCHING_RESTAURANTS":
      return Object.assign({}, state, { isLoading: true, moreRestaurants: true})
    case "ADD_RESTAURANTS":
      const restaurantLength = action.payload === undefined ? 0 : action.payload.length === 50 
      return Object.assign({}, state, { restaurants: state.restaurants.concat(action.payload)})
    case "REMOVE_ACTIVITY":
      return Object.assign({}, state, { activities: state.activities.filter((element) => element.name !== action.payload)})
    case "REMOVE_RESTAURANT":
      return Object.assign({}, state, {restaurants: state.restaurants.filter((element) => element.name !== action.payload)})
    case "FETCHING_WEATHER":
      return Object.assign({}, state, {isLoading: true })
    case "FETCHED_WEATHER":
      return Object.assign({}, state, {weather: action.payload, isLoading: false })
    case "SET_BAD_WEATHER":
      return Object.assign({}, state, {badWeather: true})
    case "SET_LOCATION":
      return Object.assign({}, state, {location: action.payload})
    case "SHUFFLE_ALL":
      return Object.assign({}, state, {restaurants: shuffleItems(state.restaurants), activities: shuffleItems(state.activities)})
    default:
      return state
  }
}

function shuffleItems(activities){
  let items = [...activities]
  console.log(items[items.length-1])
  for (let i = items.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [items[i - 1], items[j]] = [items[j], items[i - 1]];
  }
  return items
}

export default itineraryReducer
