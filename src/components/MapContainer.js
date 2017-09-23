import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {

  render() {
    var markers = [];
    ((this.props.addresses&&this.props.addresses.length>0)?(markers = this.props.addresses.map(address =>
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: address.latitude, lng: address.longitude}} />)) : null )
    return (
       (this.props.addresses&&this.props.addresses[0] ? <div id="map-container"><Map google={this.props.google}  
          style={{width: '40%', height: '70%', position: 'relative'}}  initialCenter={{
            lat: this.props.initialLat,
            lng: this.props.initialLon
          }} 
          zoom={this.props.zoom}>
        {markers}

      </Map></div> : null)

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCnTv9-CwFlgFUVSAhUh-Acr6-ydPC3GEw")
})(MapContainer)