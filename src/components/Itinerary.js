import React from 'react'
import TripAdapter from '../adapters/TripAdapter'
import Weather from './Weather'
import Activity from './Activity'
import MapContainer from './MapContainer'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItineraryActions from '../actions/itinerary'
import {removeActivity, fetchIndoorActivities, fetchActivities, removeRestaurant, fetchRestaurants, fetchStringWeather, fetchCoordinateWeather} from '../actions/itinerary'

class Itinerary extends React.Component {

  componentDidMount() {
    const location = this.props.data.match.params.location
    this.props.fetchRestaurants(location, 0)
    if (isNaN(location.charAt(0))) {
      this.props.fetchStringWeather(location)
    } else {
      this.props.fetchCoordinateWeather(location)
    }
  }

  componentWillReceiveProps(nextProps) {
    const location = this.props.data.match.params.location
    if (this.props.weatherData!= nextProps.weatherData && nextProps.weatherData!=undefined){
      if (nextProps.weatherData.weather[0].description.includes("rain")) {
        this.props.fetchIndoorActivities(location, 0)
      } else {
        this.props.fetchActivities(location, 0)
      }
    }
  }

  filterForNewActivitesRestaurants = () => {

  }

  deleteActivity = (activity) => {
    this.props.removeActivity(activity)
  }

  deleteRestaurant = (restaurant) => {
    this.props.removeRestaurant(restaurant)
  }

  desiredAddresses = () => {
    let addresses = [];
    for (let i = 0; i < 4; i++) {
      for (let key in this.props.activities[i]) {
          if (key ==="coordinates") {
            addresses.push(this.props.activities[i][key]);
          }
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let key in this.props.restaurants[i]) {
        if (key==="coordinates") {
          addresses.push(this.props.restaurants[i][key]);
        }
      }
    }
    return addresses
  }

  handleSave = (event) => {
    event.preventDefault()
    const tripParams = {
      activities: this.props.activities.slice(0,4),
      restaurants: this.props.restaurants.slice(0,3)
    }
    TripAdapter.saveTrip(tripParams)
  }

  render() {
    console.log("render itinerary", this.props)
    if (this.props.activities && this.props.restaurants) {
      var addresses = [];
      (this.props.activities.length > 0 ? addresses = this.desiredAddresses() : null)
      return(
        <div id="full-width">
         <div><button onClick={this.handleSave}>Save</button></div>
          <div id="left-half">
            <div className="itinerary">
              <h1> Itinerary </h1>
              {this.props.activities.length > 0 ? this.props.activities.slice(0,4).map((business,index) => <Activity deleteActivity={this.deleteActivity} key={index} name={business.name} data={business}/>) : null}
            </div>
            <div className="food">
              <h1> Food </h1>
              {this.props.restaurants.length > 0 ? this.props.restaurants.slice(0,3).map((business,index) => <Activity deleteActivity={this.deleteRestaurant} key={index} name={business.name} data={business}/>) : null}
            </div>
          </div>
          <div id="right-half">
            <Weather />
            <div> {addresses.length> 0? <MapContainer addresses={addresses}/>: <h1>LOADING</h1>}</div>

          </div>
          
        </div>
        
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

}

function mapStateToProps(state) {
  return {
    activities: state.itinerary.activities,
    restaurants: state.itinerary.restaurants,
    weatherData: state.itinerary.weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItineraryActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)