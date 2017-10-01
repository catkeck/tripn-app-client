import React from 'react'
import {Link} from 'react-router-dom'
import UserAdapter from '../adapters/UserAdapter'
import TripsContainer from './Profile/TripsContainer'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../actions/profile'
import * as LoginActions from '../actions/login'
import {getUserData} from '../actions/profile'
import {logout} from '../actions/login'

class NavBar extends React.Component {
  
  componentDidMount() {
    UserAdapter.getUserInfo().then(json => this.props.getUserData(json))
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.logout();
  }                      
  
  render() {
    return (  
      <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding:  '10px 20px',
    alignItems: 'center'}}>                      
        <div className="logo">
          <h1 style={{ margin: 0}}>
            <Link to={`/`}>Tripn</Link>
          </h1>
        </div>
         {localStorage.getItem("token") ? 
         <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="mini-image">
              <img src={this.props.image} alt=""/>
            </div>
            <div className="auth-links"> 
              <Link to={'/profile'}>{this.props.username} | </Link>
              <Link to={'/search'}> Plan a Trip |</Link>
              <Link to={'/'} onClick={this.handleLogout}> Log Out</Link>
            </div>
          </div> : 
            <div className="auth-links"><Link to={'/signup'}>Sign Up </Link><Link to={'/login'}>| Log In</Link></div>}
      </div>
   )
  }
}

function mapStateToProps(state) {
  return {
    username: state.profile.username,
    token: state.login.token,
    image: state.profile.image
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(NavBar)     