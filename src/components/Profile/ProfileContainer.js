import React from 'react'
import UserAdapter from '../../adapters/UserAdapter'
import TripsContainer from './TripsContainer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../../actions/profile'
import InterestsForm from './InterestsForm'
import Profile from './Profile'

class ProfileContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      displayAddImage: false
    }
  }

  componentDidMount() {
    UserAdapter.getUserInfo().then(json => this.props.getUserData(json))
  }

  getPastVisitedLocations = () => {
    if (this.props.trips&&this.props.trips.length > 0){
      let tripArrayofArrays = this.props.trips.map(trip => trip[3]); 
      let val =  [].concat.apply([], tripArrayofArrays);
      return val
    } else {
      return null;
    }
  }

  showAddImage = () => {
    this.state.displayAddImage ? this.setState({displayAddImage: false}) : this.setState({displayAddImage: true})
  }

  render() {

    const token = localStorage.getItem("token")
    if (token === null) {
      return <Redirect to='/'/>
    } else {
      const tripLocations = this.getPastVisitedLocations();
      if (this.props.trips) {
        return (
          <Profile username={this.props.username} image={this.props.image} showAddImage = {this.showAddImage} displayAddImage = {this.state.displayAddImage} interests = {this.props.interests.split(",").join(", ")} trips = {this.props.trips} tripLocations = {tripLocations}/>
        )
      } else {
        return (
          <div><img src="Cube.svg" alt=""/></div>
        )
      }
    }
  }
}


function mapStateToProps(state) {
  return {
    username: state.profile.username,
    trips: state.profile.trips,
    isLoading: state.profile.isLoading,
    activities: state.profile.activities,
    image: state.profile.image,
    interests: state.profile.interests
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
