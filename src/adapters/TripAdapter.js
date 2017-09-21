export default class TripAdapter {

  static baseUrl() {
    return 'http://localhost:3000/api/v1/'   
  }

  static getActivities(location) {
    const activityParams = {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: location})
    }
    return fetch(`${TripAdapter.baseUrl()}/activities`, activityParams)
      .then(resp => resp.json())

  }

  static getRestaurants(location) {
    const restaurantParams = {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: location})
    }
    return fetch(`${TripAdapter.baseUrl()}/restaurants`, restaurantParams)
      .then(resp => resp.json())

  }

}