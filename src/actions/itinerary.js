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

export function fetchStringWeather(location) {
  return function(dispatch) {
    dispatch({type: "FETCHING_WEATHER"})
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=600c24f64be0542ee3eea23ad03ee915`)
      .then(response => response.json())
      .then(weather => {
        dispatch({type: "FETCHED_WEATHER", payload: weather
        })
      })
  }
}

export function fetchCoordinateWeather(location) {
  const latlon = location.split(",")
  return function(dispatch) {
    dispatch({type: "FETCHING_WEATHER"})
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&units=imperial&APPID=600c24f64be0542ee3eea23ad03ee915`)
      .then(response => response.json())
      .then(weather => {
        dispatch({type: "FETCHED_WEATHER", payload: weather
        })
      })
  }
}
  