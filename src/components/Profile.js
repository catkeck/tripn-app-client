import React from 'react'
import UserAdapter from '../adapters/UserAdapter'
import TripsContainer from './TripsContainer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../actions/profile'
import {getUserData, setProfileImage, updateUserData} from '../actions/profile'
import InterestsForm from './InterestsForm'
import MapContainer from './MapContainer'
import ImageDrop from './ImageDrop'
class Profile extends React.Component {
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
      let tripArrayofArrays = this.props.trips.map(trip => trip[2]); 
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
          <div id="full-width">
            <div id="top-section">
              <div id="left-half">
                <div id="welcome-box">
                  <div id="welcome-name">Welcome {this.props.username}</div>
                  <div className="image-setup">
                    <div className="profile-image"><img src={this.props.image} alt=""/></div>
                    <button onClick={this.showAddImage}>Add/Hide Image</button>
                    {this.state.displayAddImage ? <ImageDrop /> : null}
                  </div>
                </div>
              </div>
              <div id="right-half">
                <div className="interests-box">
                  <p>Your saved interests are: {this.props.interests.split(",").join(", ")}</p>
                  <InterestsForm />
                </div>
              </div>
            </div>
              <div id="bottom-section">
                {this.props.trips.length > 0 ? <div id="welcome-name">Saved Itineraries</div>: null }
                <MapContainer addresses={tripLocations} initialLat={0} initialLon={0} zoom={2} width={'100%'} height={'200px'} profile={true}/>
              </div>
              <TripsContainer trips={this.props.trips}/>
          </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile)