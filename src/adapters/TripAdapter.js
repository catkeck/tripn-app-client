export default class TripAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/'    
  }

  getActivities(location) {
    const activityParams = {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: location})
    }
    return fetch(`${this.baseUrl}/activities`, activityParams)
      .then(resp => resp.json())

  }

  getRestaurants(location) {
    const restaurantParams = {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({searchTerm: location})
    }
    return fetch(`${this.baseUrl}/restaurants`, restaurantParams)
      .then(resp => resp.json())

  }

}