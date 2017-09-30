import React from 'react'
import TripAdapter from '../adapters/TripAdapter'
import Weather from './Weather'
import Activity from './Activity'
import MapContainer from './MapContainer'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItineraryActions from '../actions/itinerary'

var loadedActivities = 0
var loadedRestaurants = 0

class Itinerary extends React.Component {

  constructor() {
    super()
    this.state = {
      savedImageData: ""
    }
  }
  componentDidMount() {
    const LOCATION = this.props.data.match.params.location
    console.log(LOCATION)
    this.props.fetchActivities(LOCATION, 0)
    this.props.fetchRestaurants(LOCATION, 0)
    if (isNaN(LOCATION.charAt(0))) {
      this.props.fetchStringWeather(LOCATION)
    } else {
      this.props.fetchCoordinateWeather(LOCATION)
    }
    this.props.setLocation(LOCATION)
  }

  componentWillReceiveProps(nextProps) {
    const LOCATION = this.props.data.match.params.location
    if (nextProps.weatherData.weather && this.props.weatherData!== nextProps.weatherData && nextProps.weatherData!==undefined){
      if (nextProps.weatherData.weather[0].description.includes("rain")) {
        this.props.setBadWeather();
        this.props.fetchIndoorActivities(this.props.location, 0)
      } else {
        this.props.fetchActivities(this.props.location, 0)
      }
    }
  }

  componentWillUpdate(nextProps,nextState) {
    if (this.props.activities && this.props.activities.length > 1 && this.props.activities.length <= 5 && this.props.moreActivities) {
      loadedActivities+=50
      if (this.props.badWeather) {
        this.props.addIndoorActivities(this.props.data.match.params.location, loadedActivities)
      } else {
      this.props.addActivities(this.props.data.match.params.location, loadedActivities)
      }
    }
    if (this.props.restaurants && this.props.restaurants.length > 1 && this.props.restaurants.length <= 5 && this.props.moreRestaurants) {
      loadedRestaurants+=50
      this.props.addRestaurants(this.props.data.match.params.location, loadedRestaurants)
    }
  }

  filterActivities = () => {
    this.props.filterActivities(this.props.trips)
  }

  deleteActivity = (activity) => {
    this.props.removeActivity(activity)
  }

  deleteRestaurant = (restaurant) => {
    this.props.removeRestaurant(restaurant)
  }

  handleSave = (event) => {
    event.preventDefault()
    const tripParams = {
      activities: this.props.activities.slice(0,4),
      restaurants: this.props.restaurants.slice(0,3),
      location: this.props.location,
    }
    TripAdapter.saveTrip(tripParams);
  }

  coordinateLocations = () => {
    let addresses = this.props.activities.slice(0,4).concat(this.props.restaurants.slice(0,3))
    addresses = addresses.filter(function(address){ return address != undefined }); 
    return addresses.filter(function(address) {
      return address.coordinates && address.coordinates.longitude !== null 
    })
  }

  shuffleBoth = () => {
    this.props.shuffleItems()
  }



  handlePriceFilter = (event) => {
    let options = event.target.options;
    console.log(options)
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.props.someCallback(value);
  }
 
  render() {
    const token = localStorage.getItem("token")
    if (token === null) {
      return <Redirect to='/'/>
    }
    else {
      if (this.props.activities === undefined) {
        return (
          <div id="full-width">
            <h1> This location is not available to be searched at this time. </h1>
          </div>
        )
      }
      else if (this.props.activities && this.props.restaurants && (this.props.activities.length > 1 || this.props.restaurants.length > 1)) {
        let coordinateLocations = this.coordinateLocations();
        var addresses = [];
        return(
          <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: '1000px', margin: '0 auto'}}> 
          <div className="box b" style={{ width: '100%', position: 'relative', height: '700px'}}>
            <Weather name={coordinateLocations[0].location.city}/>
            <MapContainer addresses={coordinateLocations} initialLat={coordinateLocations[0].coordinates.latitude} initialLon={coordinateLocations[0].coordinates.longitude} zoom={10} width={'100%'} height={'50%'}/>
          </div>
          <div className="box a" style={{width: '50%', padding: '30px'}}>
              <div className="itinerary-column">
                <h1> Itinerary </h1>
                {this.props.activities.length > 0 ? this.props.activities.slice(0,4).map((business,index) => <Activity deleteActivity={this.deleteActivity} key={index} name={business.name} data={business}/>) : null}
              </div>
            </div>
            <div className="box c" style={{ width: '50%', padding: '30px'}}>
              <div className="itinerary-column">
                <h1> Food </h1>
                {this.props.restaurants.length > 0 ? this.props.restaurants.slice(0,3).map((business,index) => 
                  <Activity 
                    deleteActivity={this.deleteRestaurant} 
                    key={index} 
                    name={business.name} 
                    data={business}/>
                    ) : null}
              </div>
            </div>
            <div id="shuffle-button"><button onClick={this.shuffleBoth}>Shuffle</button></div>
            <div className="save-button"><button onClick={this.handleSave}>SAVE ITINERARY</button></div>
          </div>
        )
      } else {
        return (
          <div><img src="Cube.svg" alt=""/></div>
        )
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    activities: state.itinerary.activities,
    restaurants: state.itinerary.restaurants,
    weatherData: state.itinerary.weather,
    trips: state.profile.trips,
    filtered: state.itinerary.filtered,
    isLoading: state.itinerary.isLoading,
    badWeather: state.itinerary.badWeather,
    location: state.itinerary.location,
    moreActivities: state.itinerary.moreActivities,
    moreRestaurants: state.itinerary.moreRestaurants
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItineraryActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)