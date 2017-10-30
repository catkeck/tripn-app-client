function loginReducer(state = {username: "", token: ""}, action) {
  switch(action.type) {
    case "FETCHED_USER_LOGIN":
      localStorage.setItem("token", action.payload.jwt)
      return Object.assign({}, state, {username: action.payload.user.username, token: action.payload.jwt})
    case "LOG_OUT_USER":
      return Object.assign({}, state, {username: "", token: ""})
    default:
      return state
  }
}

export default loginReducer


