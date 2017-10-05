import UberAdapter from '../adapters/UberAdapter'

export function getPriceEstimate(productId, accessToken, startLatitude, startLongitude, endLatitude, endLongitude) {
  return function(dispatch) {
    UberAdapter.getPriceEstimate(productId, accessToken, startLatitude, startLongitude, endLatitude, endLongitude)
    .then(json => {
      dispatch({type: "GOT_PRICE_ESTIMATE", payload: json})
    })
  }
}

export function bookRide(accessToken, fare_id, startLatitude, startLongitude, endLatitude,endLongitude) {
  return function(dispatch) {
    UberAdapter.bookRide(accessToken, fare_id, startLatitude, startLongitude, endLatitude, endLongitude)
    .then(json => {
      dispatch({type: "STATUS_RIDE_REQUEST", payload: json})
    })
  }
}