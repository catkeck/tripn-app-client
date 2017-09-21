import React from 'react'
import TripAdapter from '../adapters/TripAdapter'
import Weather from './Weather'
import Activity from './Activity'
import MapContainer from './MapContainer'

class Itinerary extends React.Component {
  constructor() {
    super()
    this.state={
      activities: [],
      restaurants: []
    }
  }

  componentDidMount() {
    const adapter = new TripAdapter();
    adapter.getActivities(this.props.data.match.params.location).then(json => this.setState({activities: json.businesses.businesses}))
    adapter.getRestaurants(this.props.data.match.params.location).then(json => this.setState({restaurants: json.restaurants.businesses}))
  }

  filterWeather() {

  }

  deleteActivity = (activity) => {
    const filteredActivities = this.state.activities.filter((element) => {
      return element.name !== activity
    })
    this.setState({
      activities: filteredActivities
    })
  }

  deleteRestaurant = (restaurant) => {
    const filteredRestaurants = this.state.restaurants.filter((element) => {
      return element.name !== restaurant
    })
    this.setState({
      restaurants: filteredRestaurants
    })
  }

  desiredAddresses = () => {
    var addresses = [];
    for (let i = 0; i < 4; i++) {
      for (let key in this.state.activities[i]) {
          if (key ==="coordinates") {
            addresses.push(this.state.activities[i][key]);
          }
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let key in this.state.restaurants[i]) {
        if (key==="coordinates") {
          addresses.push(this.state.restaurants[i][key]);
        }
      }
    }
    return addresses
  }

  render() {
    // console.log(this.props.data.match.params.location)
    // console.log(this.state)
    var addresses = [];
    (this.state.activities.length > 0 ? addresses = this.desiredAddresses() : null)
    return(
      <div id="full-width">
        <div id="left-half">
          <div className="itinerary">
            <h1> Itinerary </h1>
            {this.state.activities.length > 0 ? this.state.activities.slice(0,4).map((business,index) => <Activity deleteActivity={this.deleteActivity} key={index} name={business.name} data={business}/>) : null}
          </div>
          <div className="food">
            <h1> Food </h1>
            {this.state.restaurants.length > 0 ? this.state.restaurants.slice(0,3).map((business,index) => <Activity deleteActivity={this.deleteRestaurant} key={index} name={business.name} data={business}/>) : null}
          </div>
        </div>
        <div id="right-half">
          <div><Weather location={this.props.data.match.params.location}/></div>
          <div><MapContainer addresses={addresses}/></div>
        </div>
      </div>
    )
  }

}

export default Itinerary