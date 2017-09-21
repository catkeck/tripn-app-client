import TripAdapter from '../adapters/TripAdapter'

export function removeActivity(activity){
  return {
    type: "REMOVE_ACTIVITY",
    payload: activity
  }
}


export function fetchActivities(location) {
  return function(dispatch) {
    dispatch({type:"FETCHING_ACTIVITIES"})
    TripAdapter.getActivities(location)
      .then(activities => {
        dispatch({type: "FETCHED_ACTIVITIES", payload: activities.businesses.businesses})
      })
  }
}

export function removeRestaurant(restaurant){
  return {
    type: "REMOVE_RESTAURANT",
    payload: restaurant
  }
}

export function fetchRestaurants(location) {
  return function(dispatch) {
    dispatch({type:"FETCHING_RESTAURANTS"})
    TripAdapter.getRestaurants(location)
      .then(restaurants => {
        dispatch({type: "FETCHED_RESTAURANTS", payload: restaurants.restaurants.businesses})
      })
  }
}