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

  reformatAddressData = (address) => {
    return {lat: address.latitude || address.coordinates.latitude,
      lng: address.longitude || address.coordinates.longitude
    }
  }

  reformatName = (address) => {
    return address ? (address.activity || address.name) : null
  }


  render() {
    var markers = [];
    ((this.props.addresses&&this.props.addresses.length>0) ? (markers = this.props.addresses.map(address =>
        <Marker
          name={this.reformatName(address)}
          onClick={this.onMarkerClick}
          position={this.reformatAddressData(address)} 
        />
      )) : null )
    const style = { width: this.props.width, height: this.props.height}
    return (
       (this.props.addresses&&this.props.addresses[0] ? 
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
        : null)
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCnTv9-CwFlgFUVSAhUh-Acr6-ydPC3GEw")
})(MapContainer)