import UberAdapter from '../adapters/UberAdapter'

export function getEstimatesForUserLocation(latitude, longitude, destinationLatitude, destinationLongitude) {
  const uberParams= {
    method: 'GET',
    headers: {
      Authorization: "Token 1jH-nC5fg8498m1W2suwduE2uKgm61wBDPachewq"
    }
  }
  return function(dispatch) {
    fetch(`https://api.uber.com/v1/estimates/price?start_latitude=${latitude}&start_longitude=${longitude}&end_latitude=${destinationLatitude}&end_longitude=${destinationLongitude}`, uberParams)
      .then(response => response.json())
      .then(costs => dispatch({type: "GOT_UBER_ESTIMATE", payload: costs}))
  }
}

export function getToken(code) {
  return function(dispatch) {
    // dispatch({type:"FETCHING_USER_DATA"})
    UberAdapter.getAccessToken(code)
    .then(json => {
      dispatch({type: "FETCHED_ACCESS_TOKEN", payload: json})
    })
  }
}

export function getProducts(token, latitude, longitude) {
  return function(dispatch) {
    UberAdapter.getProducts(token, latitude, longitude)
    .then(json => {
      dispatch({type: "GOT_PRODUCT_OPTIONS", payload: json})
    })
  }
}

