import React from 'react'
import UserAdapter from '../adapters/UserAdapter'

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      coordinates: "",
      searchTerm: "",
      showButton: false
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.state.searchTerm}`)
  }

  // latitude,longitude

  handleDetectLocation = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.state.coordinates}`)
  }


  componentDidMount() {
    const adapter = new UserAdapter()
    adapter.getUserInfo().then(json => this.setState({username: json.username}))
     navigator.geolocation.getCurrentPosition(location => {
      this.setState({coordinates: `${location.coords.latitude},${location.coords.longitude}`, showButton: true})
    })
  }
  
  render() {
    // console.log(this.state.username)
    return (
      <div id="full-width">
        <div id="left-half">
          <h3>Welcome {this.state.username}</h3>
        </div>
        <div id="right-half">
          <div id="search-box">
            <form onSubmit={this.handleSubmit}>
              <h3> Get Itinerary </h3>
              <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
              <input type="submit"/>
            </form>
            {this.state.showButton ? <button onClick={this.handleDetectLocation}>Search Off Current Location</button> : null }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile