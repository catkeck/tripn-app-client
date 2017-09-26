import React from 'react'
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    var markers = [];
    ((this.props.addresses&&this.props.addresses.length>0) ? (markers = this.props.addresses.map(address =>
        <Marker
          name={address.activity}
          onClick={this.onMarkerClick}
          position={{lat: address.latitude, lng: address.longitude}} 
        />
      )) : null )
    const style = { width: this.props.width, height: this.props.height, position: 'relative'}
    return (
       (this.props.addresses&&this.props.addresses[0] ? 
        <div className="map-container">
          <Map google={this.props.google} 
            onClick={this.onMapClicked} 
            style={style}  
            initialCenter={{
              lat: this.props.initialLat,
              lng: this.props.initialLon
            }} 
            zoom={this.props.zoom}>
            {markers}
            <InfoWindow 
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div> : null)
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCnTv9-CwFlgFUVSAhUh-Acr6-ydPC3GEw")
})(MapContainer)