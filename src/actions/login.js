import AuthAdapter from '../adapters/AuthAdapter'
import swal from 'sweetalert'

export function login(userParams, history) {
  return function(dispatch) {
    AuthAdapter.login(userParams)
    .then(user => {
      dispatch({type: "FETCHED_USER_LOGIN", payload: user})
    })
    .then(() => history.replace('/'))
    .catch(error => swal("This is not a valid login.", "Please try again",'error'))
  }
}

// localStorage.setItem("token", user.jwt)

export function logout() {
  AuthAdapter.logOut();
  return {
    type: "LOG_OUT_USER"
  }
}

export function signup(userParams, history) {
  return function(dispatch) {
    AuthAdapter.signup(userParams)
    .then(user => {
      dispatch({type: "FETCHED_USER_LOGIN", payload: user})
    })
    .then(() => history.replace('/'))
  }
}
