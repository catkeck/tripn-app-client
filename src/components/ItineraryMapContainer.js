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
    var markers = [];
    ((this.props.addresses&&this.props.addresses.length>0) ? (markers = this.props.addresses.map((address, index) =>
        <Marker
          name={address.name}
          key={index}
          onClick={this.onMarkerClick}
          position={{lat: address.coordinates.latitude, lng: address.coordinates.longitude}} 
        />
      )) : null )
    const style = { width: this.props.width, height: this.props.height, position: 'relative'}
    return (
       (this.props.addresses&&this.props.addresses[0] ? 
        <div className="itinerary-map">
          <Map google={this.props.google} 
            key={this.props.addresses[0].name}
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
})(ItineraryMapContainer)