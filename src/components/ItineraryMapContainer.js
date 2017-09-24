import React from 'react'
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

class ItineraryMapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, e) => {
    console.log(this.state)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    console.log(this.state)
  }

  onMapClicked = () => {
    console.log(this.state)
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    console.log(this.props)
    var markers = [];
    ((this.props.addresses&&this.props.addresses.length>0) ? (markers = this.props.addresses.map((address, index) =>
        <Marker
          name={address.name}
          key={index}
          onClick={this.onMarkerClick}
          position={{lat: address.coordinates.latitude, lng: address.coordinates.longitude}} 
        />
      )) : null )
    return (
       (this.props.addresses&&this.props.addresses[0] ? 
        <div>
          <Map google={this.props.google} 
            onClick={this.onMapClicked} 
            style={{width: '40%', height: '60%', position: 'relative'}}  
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
})(ItineraryMapContainer)