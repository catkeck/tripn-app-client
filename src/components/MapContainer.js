import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 0,
      lon: 0
    }
  }

  componentWillMount(){
    this.setState({
      lat: this.props.addresses[0].latitude,
      lon: this.props.addresses[0].longitude
    })
  }

  render() {
    var markers = [];
    (this.props.addresses.length > 0 ? (markers = this.props.addresses.map(address =>
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: address.latitude, lng: address.longitude}} />)) : null )
    return (
       (this.props.addresses[0] ? <Map google={this.props.google}  
          style={{width: '40%', height: '50%', position: 'relative'}}  initialCenter={{
            lat: this.state.lat,
            lng: this.state.lon
          }} 
          zoom={10}>
        {markers}

      </Map> : null)

    );
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyCnTv9-CwFlgFUVSAhUh-Acr6-ydPC3GEw")
})(MapContainer)