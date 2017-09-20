import React from 'react'
import TripAdapter from '../adapters/TripAdapter'
import Weather from './Weather'
import Activity from './Activity'

class Itinerary extends React.Component {
  constructor() {
    super()
    this.state={
      activities: {},
      restaurants: {}
    }
  }

  componentDidMount() {
    const adapter = new TripAdapter();
    adapter.getActivities(this.props.data.match.params.location).then(json => this.setState({activities: json.businesses.businesses}))
    adapter.getRestaurants(this.props.data.match.params.location).then(json => this.setState({restaurants: json.restaurants.businesses}))
  }

  filterWeather() {

  }

  render() {
    console.log(this.props.data.match.params.location)
    console.log(this.state)
    return(
      <div id="full-width">
        <div id="left-half">
          <div className="itinerary">
            <h1> Itinerary </h1>
            {this.state.activities.length > 0 ? this.state.activities.slice(0,4).map(business => <Activity data={business}/>) : null}
          </div>
          <div className="food">
            <h1> Food </h1>
            {this.state.restaurants.length > 0 ? this.state.restaurants.slice(0,3).map(business => <Activity data={business}/>) : null}
          </div>
        </div>
        <div id="right-half">
          <Weather location={this.props.data.match.params.location}/>
        </div>
      </div>
    )
  }

}

export default Itinerary