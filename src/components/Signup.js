import React from 'react'
import AuthAdapter from '../adapters/AuthAdapter'
import swal from 'sweetalert'

class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  handlePasswordConfirmationChange = (event) => {
    this.setState({passwordConfirmation: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username===""||this.state.password===""){
      swal('This is not a valid sign up', 'Please fill in all fields', 'error')
    }
    else if (this.state.password === this.state.passwordConfirmation) {
      const userParams = {
        username: this.state.username,
        password: this.state.password
      }
      AuthAdapter.signup(userParams)
        .then((user) => {
          this.setState({username: "", password: ""})
          
          localStorage.setItem("token", user.jwt)
          // console.log(this.props.history)
          this.props.history.replace("/")
        })
      this.props.handleLoginAndSignup()
      swal('Congratulations you have signed up!', '', 'success')
    }
    else {
      swal('Your password and password confirmation do not match', 'Please try again.', 'error')
    }
  }

  render() {
    return (
      <div id="login-box">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.username} onChange={this.handleUsernameChange} type="text" placeholder="username" />
          <input value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder="password" />
          <input value={this.state.password_confirmation} onChange={this.handlePasswordConfirmationChange} type='password' placeholder='password confirmation' />
          <input type="submit" name="signup_submit" value="Sign Up"/>
        </form>
      </div>
    )
  }
}


export default Signup