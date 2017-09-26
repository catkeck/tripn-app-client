import React from 'react'
import {Link} from 'react-router-dom'
import UserAdapter from '../adapters/UserAdapter'
import TripsContainer from './TripsContainer'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../actions/profile'
import {getUserData} from '../actions/profile'

class NavBar extends React.Component {

  componentDidMount() {
    UserAdapter.getUserInfo().then(json => this.props.getUserData(json))
  }

  handleLogout = () => {
    localStorage.removeItem("token")
  }                      
  
  render() {
    return (  
      <div>                      
        <div className="logo">
          <h1>
            <Link to={`/`}>Tripn</Link>
          </h1>
        </div>
         {localStorage["token"] ? <div className="auth-links"><div className="mini-image"><img src={this.props.image} alt=""/></div>  Welcome {this.props.username}! |
            <Link to={'/profile'}> My Profile |</Link>
            <Link to={'/search'}> Plan a Trip |</Link>
            <Link to={'/'} onClick={this.handleLogout}> Log Out</Link>
         </div> : <div className="auth-links"><Link to={'/signup'}>Sign Up </Link><Link to={'/login'}>| Log In</Link></div>}
        <h1></h1>
      </div>
   )
  }
}


function mapStateToProps(state) {
  return {
    username: state.profile.username,
    image: state.profile.image
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(NavBar)     