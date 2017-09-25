import React from 'react'
import UserAdapter from '../adapters/UserAdapter'
import TripsContainer from './TripsContainer'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../actions/profile'
import {getUserData, getCurrentPosition, setSearchTerm, setProfileImage} from '../actions/profile'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import InterestsForm from './InterestsForm'
import MapContainer from './MapContainer'

const CLOUDINARY_UPLOAD_PRESET = 'zqvt4w5a';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/djlznf9dr/image/upload'

class Profile extends React.Component {

  handleChange = (event) => {
    this.props.setSearchTerm(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.props.searchTerm.replace(',','')}`)
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

  //not currently being used
  getPastVisitedLocations = () => {
    if (this.props.trips&&this.props.trips.length > 0){
      let tripArrayofArrays = this.props.trips.map(trip => trip[2]); 
      let val =  [].concat.apply([], tripArrayofArrays);
      return val
    } else {
      return null;
    }
  }

  handleDrop = (files) => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); 
      return axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        UserAdapter.saveUserImage(fileURL)
      })
    });
  }

  render() {
    //not currently using this
    const tripLocations = this.getPastVisitedLocations();
    if (this.props.trips) {
      return (
        <div id="full-width">
          <div id="top-section">
            <div id="left-half">
              <div id="search-box">
                <h3>Welcome {this.props.username}</h3>
                <div className="profile-image"><img src={this.props.image} alt=""/></div>
                <Dropzone 
                  onDrop={this.handleDrop} 
                  multiple={false}
                  accept="image/*" 
                >
                  <p>Drop your files or click here to upload</p>
              </Dropzone>
                <InterestsForm />
              </div>
            </div>
            <div id="right-half">
              <div id="search-box">
                <form onSubmit={this.handleSubmit}>
                  <h3> Get Itinerary </h3>
                  <input type="text" value={this.props.searchTerm} onChange={this.handleChange}/>
                  <input type="submit"/>
                </form>
                {this.props.showButton ? <div className="pad-button"><button onClick={this.handleDetectLocation}>SEARCH CURRENT LOCATION</button></div> : null }
              </div>
            </div>
          </div>
            <div id="bottom-section">
              {this.props.trips.length > 0 ? <h2> Saved Itineraries </h2> : null }
              <MapContainer addresses={tripLocations} initialLat={0} initialLon={0} zoom={2} width={'70%'} height={'60%'} profile={true}/>
            </div>
            <TripsContainer trips={this.props.trips}/>
        </div>
      )
    } else {
      return (
        <div><img src="Infinity.svg" alt=""/></div>
      )
    }
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
    activities: state.profile.activities,
    image: state.profile.image
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)