import UserAdapter from '../adapters/UserAdapter'

export function getUserData(json) {
  return function(dispatch) {
    dispatch({type:"FETCHING_USER_DATA"})
    UserAdapter.getUserInfo()
    .then(json => {
      dispatch({type: "FETCHED_USER_DATA", payload: json})
    })
  }
}

export function getCurrentPosition() {
  return function(dispatch) {
    dispatch({type:"FETCHING_POSITION"})
    navigator.geolocation.getCurrentPosition(location => {
      dispatch({type: "FETCHED_POSITION", payload: location, showButton: true})})
  }
}

export function setSearchTerm(searchTerm) {
  return {
    type: "SET_SEARCH_TERM",
    payload: searchTerm
  }
}


