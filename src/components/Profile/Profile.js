import React from 'react'
import TripsContainer from './TripsContainer'
import InterestsForm from './InterestsForm'
import ImageDrop from './ImageDrop'
import MapContainer from '../MapContainer'

const Profile = (props) => {
  return (
    <div className="wrapper" style={{ maxWidth: '1500px'}}>
      <div className="mini-wrapper">
        <div className="box welcome">
          <div id="welcome-name">Welcome {props.username}</div>
          <div className="image-setup">
            <div className="profile-image"><img src={props.image} alt=""/></div>
            <button className="interests-button"onClick={props.showAddImage}>Add/Hide Image</button>
            {props.displayAddImage ? <ImageDrop /> : null}
          </div>
        </div>
        <div className="box interests-box">
          <p>Your saved interests are: {props.interests}</p>
          <InterestsForm />
        </div>
      </div>
    <div className="box itineraries">
      {props.trips.length > 0 ? <div id="welcome-name">Saved Itineraries</div>: null }
      <MapContainer addresses={props.tripLocations} initialLat={0} initialLon={0} zoom={2} profile={true} width={'100%'} height={'100%'}/>
    </div>
    <TripsContainer trips={props.trips}/>

  </div>
  )
}

export default Profile