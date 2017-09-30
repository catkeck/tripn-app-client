import TripAdapter from '../adapters/TripAdapter'

export function fetchActivities(location) {
  console.log(location)
  return function(dispatch) {
    dispatch({type:"FETCHING_ACTIVITIES"})
    TripAdapter.getActivities(location, 0)
      .then(activities => {
        dispatch({type: "FETCHED_ACTIVITIES", payload: activities.businesses.businesses})
      })
  }
}


export function shuffleItems() {
  return {
    type:"SHUFFLE_ALL"
  }
}

export function fetchIndoorActivities(location) {
  return function(dispatch) {
    dispatch({type:"FETCHING_ACTIVITIES"})
    TripAdapter.getIndoorActivities(location, 0)
      .then(activities => {
        console.log(activities)
        dispatch({type: "FETCHED_ACTIVITIES", payload: activities.businesses.businesses})
      })
  }
}

export function addActivities(location, index) {
  return function(dispatch) {
    dispatch({type:"FETCHING_ACTIVITIES"})
    TripAdapter.getActivities(location, index)
      .then(activities => {
        dispatch({type: "ADD_ACTIVITIES", payload: activities.businesses.businesses})
      })
  }
} 

export function addIndoorActivities(location, index) {
  return function(dispatch) {
    dispatch({type:"FETCHING_ACTIVITIES"})
    TripAdapter.getIndoorActivities(location, index)
      .then(activities => {
        dispatch({type: "ADD_ACTIVITIES", payload: activities.businesses.businesses})
      })
  }
} 

export function addRestaurants(location, index) {
  return function(dispatch) {
    dispatch({type:"FETCHING_RESTAURANTS"})
    TripAdapter.getRestaurants(location, index)
      .then(restaurants => {
        dispatch({type: "ADD_RESTAURANTS", payload: restaurants.restaurants.businesses})
      })
  }
} 

export function removeActivity(activity){
  return {
    type: "REMOVE_ACTIVITY",
    payload: activity
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
    TripAdapter.getRestaurants(location, 0)
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
    .then(
      weather => {
        dispatch({type: "FETCHED_WEATHER", payload: weather
        })
      }
    )
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

export function filterActivities(activityNames) {
    return {
    type: "FILTER_ACTIVITIES",
    payload: activityNames
  }
}

export function setShuffledActivities(activities) {
  return {
    type: "FETCHED_ACTIVITIES", payload: activities
  }
}

export function setShuffledRestaurants(restaurants) {
  return {
    type: "FETCHED_RESTAURANTS", payload: restaurants
  }
}


export function setBadWeather() {
  return {
    type: "SET_BAD_WEATHER"
  }
}

export function setLocation(location) {
  return {
    type: "SET_LOCATION",
    payload: location
  }
}