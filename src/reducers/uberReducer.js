function uberReducer(state = {costs: {}, latitude: "", longitude: "", access_token: "", products: [], pricing: {}, rideStatus: ""}, action) {
  switch(action.type) {
    case "GOT_UBER_ESTIMATE":
      return Object.assign({}, state, {costs: action.payload.prices})
    case "SET_DESIRED_LATITUDE_AND_LONGITUDE":
      return Object.assign({}, state, {latitude: action.payload.latitude, longitude: action.payload.longitude})
    case "FETCHED_ACCESS_TOKEN":
      return Object.assign({}, state, {access_token: action.payload})
    case "GOT_PRODUCT_OPTIONS":
      return Object.assign({}, state, {products: action.payload.products.products})
    case "GOT_PRICE_ESTIMATE":
      return Object.assign({}, state, {pricing: action.payload.price})
    case "STATUS_RIDE_REQUEST":
      debugger
      return Object.assign({}, state, {rideStatus: action.payload.result.status})
    default:
      return state
  }
}

export default uberReducer
