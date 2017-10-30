require('dotenv').config()

export default class AuthAdapter {

  static login(userParams) {
    const userJSON = JSON.stringify(userParams)
    const request = {
      method: 'POST',
      body: userJSON,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    return fetch(`https://tripn-api.herokuapp.com/api/v1/login`, request)
      .then(res => res.json())
  }

  static signup(userParams) {
    const userJSON = JSON.stringify(userParams)
    debugger
    return fetch('https://tripn-api.herokuapp.com/api/v1/signup', {
      method: 'POST',
      body: userJSON,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
  }

  static logOut() {
    localStorage.removeItem('token')
  }
}