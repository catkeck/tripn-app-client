import React from 'react'
import TripAdapter from '../adapters/TripAdapter'
import Weather from './Weather'
import Activity from './Activity'
import ItineraryMapContainer from './ItineraryMapContainer'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItineraryActions from '../actions/itinerary'
import {removeActivity, fetchIndoorActivities, fetchActivities, removeRestaurant, fetchRestaurants, fetchStringWeather, fetchCoordinateWeather, filterActivities, addActivities, addRestaurants, setShuffledActivities} from '../actions/itinerary'

var loadedActivities = 0
var loadedRestaurants = 0

class Itinerary extends React.Component {

  componentDidMount() {
    const LOCATION = this.props.data.match.params.location
    this.props.fetchRestaurants(LOCATION, 0)
    if (isNaN(LOCATION.charAt(0))) {
      this.props.fetchStringWeather(LOCATION)
    } else {
      this.props.fetchCoordinateWeather(LOCATION)
    }
  }

  componentWillReceiveProps(nextProps) {
    const LOCATION = this.props.data.match.params.location
    if (this.props.weatherData!== nextProps.weatherData && nextProps.weatherData!==undefined){
      if (nextProps.weatherData.weather[0].description.includes("rain")) {
        this.props.fetchIndoorActivities(LOCATION, 0)
      } else {
        this.props.fetchActivities(LOCATION, 0)
      }
    }

  }

  componentWillUpdate(nextProps,nextState) {
    if (this.props.activities.length > 1 && this.props.activities.length <= 5) {
      loadedActivities+=50
      this.props.addActivities(this.props.data.match.params.location, loadedActivities)
    }
    if (this.props.restaurants.length > 1 && this.props.restaurants.length <= 5) {
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
      location: this.props.data.match.params.location
    }
    TripAdapter.saveTrip(tripParams)
  }

  coordinateLocations = () => {
    let addresses = this.props.activities.slice(0,4).concat(this.props.restaurants.slice(0,3))
    return addresses.filter(function(address) {
      return address.coordinates && address.coordinates.longitude !== null 
    })
  }

  shuffleItems = (items) => {
    for (let i = items.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [items[i - 1], items[j]] = [items[j], items[i - 1]];
    }
    console.log(items)
    this.props.setShuffledActivities(items)
    // window.location.reload()
  }


  render() {
    if (this.props.activities && this.props.restaurants) {
      let coordinateLocations = this.coordinateLocations();
      let shuffledActivities = this.shuffleItems(this.props.activities)
      var addresses = [];
      return(
        <div id="full-width">
          <div id="left-half">
            <div><button onClick={this.handleSave}>Save Itinerary</button></div>
            <div><button onClick={shuffledActivities}>Shuffle Order</button></div>
            <div className="itinerary">
              <h1> Itinerary </h1>
              {this.props.activities.length > 0 ? this.props.activities.slice(0,4).map((business,index) => <Activity deleteActivity={this.deleteActivity} key={index} name={business.name} data={business}/>) : null}
            </div>
            <div className="food">
              <h1> Food </h1>
              {this.props.restaurants.length > 0 ? this.props.restaurants.slice(0,3).map((business,index) => 
                <Activity 
                  deleteActivity={this.deleteRestaurant} 
                  key={index} 
                  name={business.name} 
                  data={business}/>) : null}
            </div>
          </div>
          <div id="right-half">
            <Weather />
            <div> {this.props.activities.length> 0? <ItineraryMapContainer addresses={coordinateLocations} initialLat={coordinateLocations[0].coordinates.latitude} initialLon={coordinateLocations[0].coordinates.longitude} zoom={10} width={'20%'} height={'50%'} profile={false}/>: <h1><img src="Infinity.svg" alt=""/></h1>}</div>
          </div>
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
    activities: state.itinerary.activities,
    restaurants: state.itinerary.restaurants,
    weatherData: state.itinerary.weather,
    trips: state.profile.trips,
    filtered: state.itinerary.filtered,
    isLoading: state.itinerary.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItineraryActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)