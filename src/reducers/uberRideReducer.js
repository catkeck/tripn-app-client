function uberRideReducer(state = {pricing: {}, rideStatus: "", product_id: ""}, action) {
  switch(action.type) {
    case "GOT_PRICE_ESTIMATE":
      return Object.assign({}, state, {pricing: action.payload.price, product_id: action.payload.product_id})
    case "STATUS_RIDE_REQUEST":
      return Object.assign({}, state, {rideStatus: action.payload.result.status})
    default:
      return state
  }
}

export default uberRideReducer
