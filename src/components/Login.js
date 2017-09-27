import React from 'react'
import AuthAdapter from '../adapters/AuthAdapter'
import swal from 'sweetalert'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/login'
import {login} from '../actions/login'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }  

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history)

    // const userParams = {
    //   username: this.state.username,
    //   password: this.state.password
    // }
    // AuthAdapter.login(userParams)
    //   .then((user) => {
    //     this.setState({username: "", password: ""})
    //     localStorage.setItem("token", user.jwt)
    //     this.props.history.replace("/")
    //   }).catch(error => swal("This is not a valid login.", "Please try again",'error'))
    // this.props.handleLoginAndSignup()
  }

  // constructor() {
  //   super()
  //   this.state = {
  //     loggedin: false
  //   }
  // }

  // handleLogout = (event) => {
  //   event.preventDefault();
  //   AuthAdapter.logOut();
  //   this.setState({loggedin: false})
  // }

  // handleLoginAndSignup = () => {
  //   this.setState({loggedin: true})
  // }

  render() {
    return (
      <div id="login-box">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.username} onChange={this.handleUsernameChange} type="text" placeholder="username" />
          <input value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder="password" />
          <input type="submit" name="signup_submit" value="Sign in"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(null,mapDispatchToProps)(Login)