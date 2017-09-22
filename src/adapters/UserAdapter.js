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
}