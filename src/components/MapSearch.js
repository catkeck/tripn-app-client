import React from 'react'
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

class MapSearch extends React.Component {

  onMapClick = (mapProps, map, clickEvent) => {
    let latitude = clickEvent.latLng.lat()
    let longitude = clickEvent.latLng.lng()
    this.props.history.history.push(`/search/${latitude},${longitude}`)
  }

  render() {
    const style = { width: '100%', height: '100%'}
    return (
      <div id="search-map">
        <Map google={this.props.google} 
          onClick={this.onMapClick} 
          style={style}  
          initialCenter={{
            lat: 0,
            lng: 0
          }} 
          zoom={2}>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCnTv9-CwFlgFUVSAhUh-Acr6-ydPC3GEw")
})(MapSearch)