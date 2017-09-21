import React from 'react'
import TripAdapter from '../adapters/TripAdapter'
import Weather from './Weather'
import Activity from './Activity'
import MapContainer from './MapContainer'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItineraryActions from '../actions/itinerary'
import {removeActivity, fetchActivities, removeRestaurant, fetchRestaurants} from '../actions/itinerary'

class Itinerary extends React.Component {

  componentDidMount() {
    console.log(this.props.data)
    this.props.fetchActivities(this.props.data.match.params.location)
    this.props.fetchRestaurants(this.props.data.match.params.location)
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

  render() {
    var addresses = [];
    (this.props.activities.length > 0 ? addresses = this.desiredAddresses() : null)
    return(
      <div id="full-width">
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
          <div><Weather location={this.props.data.match.params.location}/></div>
          <div> {addresses.length> 0? <MapContainer addresses={addresses}/>: <h1>LOADING</h1>}</div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    activities: state.activities,
    restaurants: state.restaurants
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItineraryActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)