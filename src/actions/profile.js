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

export function updateUserData(json) {
  return {
    type: "FETCHED_USER_DATA",
    payload: json
  }
}

export function setProfileImage(image) {
  return {
    type: "SET_PROFILE_IMAGE",
    payload: image
  }
}