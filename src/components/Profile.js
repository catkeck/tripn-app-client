import React from 'react'
import UserAdapter from '../adapters/UserAdapter'
import TripsContainer from './TripsContainer'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../actions/profile'
import {getUserData, getCurrentPosition, setSearchTerm, setProfileImage} from '../actions/profile'
import FileBase64 from 'react-file-base64'

class Profile extends React.Component {

  handleChange = (event) => {
    this.props.setSearchTerm(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.props.searchTerm}`)
  }


  handleDetectLocation = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.props.coordinates}`)
  }

  componentDidMount() {
    UserAdapter.getUserInfo().then(json => this.props.getUserData(json))
    this.props.getCurrentPosition();
  }
  
  getFiles = (file) => {
    this.props.setProfileImage(file);
    UserAdapter.saveUserImage(file);
  }

  render() {
    console.log(this.props.trips)
    return (
      <div id="full-width">
        <div id="top-section">
          <div id="left-half">
            <div id="search-box">
              <h3>Welcome {this.props.username}</h3>
              <img src={this.props.file} alt=""/>
              <FileBase64 multiple={ false } onDone={ this.getFiles}/>
            </div>
          </div>
          <div id="right-half">
            <div id="search-box">
              <form onSubmit={this.handleSubmit}>
                <h3> Get Itinerary </h3>
                <input type="text" value={this.props.searchTerm} onChange={this.handleChange}/>
                <input type="submit"/>
              </form>
              {this.props.showButton ? <div className="pad-button"><button onClick={this.handleDetectLocation}>Search Current Location</button></div> : null }
            </div>
          </div>
        </div>
        <div id="bottom-section">
          <TripsContainer trips={this.props.trips}/>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    username: state.profile.username,
    coordinates: state.profile.coordinates,
    searchTerm: state.profile.searchTerm,
    trips: state.profile.trips,
    showButton: state.profile.showButton,
    isLoading: state.profile.isLoading,
    activities: state.profile.activities
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)