export default class TripAdapter {

  static baseUrl() {
    return 'http://localhost:3000/api/v1/'   
  }


  static getActivities(location, offset) {
    const token =localStorage.getItem("token")
    const activityParams = {
      method: 'post',
      headers: {
        'Authorization': token,
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: location, offset: offset})
    }
    return fetch(`${TripAdapter.baseUrl()}activities`, activityParams)
      .then(resp => resp.json())

  }

  static getIndoorActivities(location, offset) {
    const token =localStorage.getItem("token")
    const activityParams = {
      method: 'post',
      headers: {
        'Authorization': token,
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: location, offset: offset})
    }
    return fetch(`${TripAdapter.baseUrl()}indoor_activities`, activityParams)
      .then(resp => resp.json())
  }

  static getRestaurants(location, offset) {
    const token =localStorage.getItem("token")
    const restaurantParams = {
      method: 'post',
      headers: {
        'Authorization': token,
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: location, offset: offset})
    }
    return fetch(`${TripAdapter.baseUrl()}restaurants`, restaurantParams)
      .then(resp => resp.json())

  }

  static saveTrip(trip) {
    const token = localStorage.getItem("token")
    const tripSaveParams = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({trip: trip})
    }
    fetch(`${TripAdapter.baseUrl()}schedules/new`, tripSaveParams)
  }
}