function uberRideReducer(state = {pricing: {}, rideStatus: ""}, action) {
  switch(action.type) {
    case "GOT_PRICE_ESTIMATE":
      return Object.assign({}, state, {pricing: action.payload.price})
    case "STATUS_RIDE_REQUEST":
      debugger
      return Object.assign({}, state, {rideStatus: action.payload.result.status})
    default:
      return state
  }
}

export default uberRideReducer
