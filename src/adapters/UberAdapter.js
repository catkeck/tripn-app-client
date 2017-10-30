const URL = 'https://tripn-api.herokuapp.com/api/v1/';

export default class UberAdapter {
  
  static baseUrl() {
    return `${URL}/tinydancer`   
  }

  static getAccessToken(code) {
    const token = localStorage.getItem("token")
    const accessTokenParams = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({code: code})
    }
    return fetch(`${UberAdapter.baseUrl()}/get_token`, accessTokenParams).then(resp => resp.json())

  }

  static getProducts(accessToken, latitude, longitude) {
    const token = localStorage.getItem("token")
    const productParams = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({accessToken: accessToken, latitude: latitude, longitude: longitude})
    }
    return fetch(`${UberAdapter.baseUrl()}/get_products`, productParams).then(resp => resp.json())

  }

  static getPriceEstimate(productId, accessToken, startLatitude, startLongitude, endLatitude, endLongitude) {
    const token = localStorage.getItem("token")
    const pricingParams = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({productId: productId, accessToken: accessToken, startLatitude: startLatitude, startLongitude: startLongitude, endLatitude: endLatitude, endLongitude: endLongitude})
    }
    return fetch(`${UberAdapter.baseUrl()}/get_price_estimate`, pricingParams).then(resp => resp.json())

  }

  static bookRide(accessToken, fareId, startLatitude, startLongitude, endLatitude, endLongitude) {
    const token = localStorage.getItem("token")
    const bookingParams = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({accessToken: accessToken, fare_id: fareId, startLatitude: startLatitude, startLongitude: startLongitude, endLatitude: endLatitude, endLongitude: endLongitude})
    }

    return fetch(`${UberAdapter.baseUrl()}/book_ride`, bookingParams).then(resp => resp.json())
  }
}

