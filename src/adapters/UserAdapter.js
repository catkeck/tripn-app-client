export default class UserAdapter {

  static baseUrl() {
    return 'http://localhost:3000/api/v1/user'   
  }

  static getUserInfo() {
    const token =localStorage.getItem("token")
    const params = {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    }
    
    return fetch(UserAdapter.baseUrl(), params)
      .then(resp => resp.json())
  }

  static saveUserImage(image) {
    const token = localStorage.getItem("token")
    const imageSaveParams = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({image: image})
    }
    return fetch(`${UserAdapter.baseUrl()}/save_image`, imageSaveParams).then(resp => resp.json())

  }

  static saveUserInterests(interests) {
    const token = localStorage.getItem("token")
    const interestsParams = {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({interests: interests})
    }
    return fetch(`${UserAdapter.baseUrl()}/save_interests`, interestsParams).then(resp => resp.json())
  }
}