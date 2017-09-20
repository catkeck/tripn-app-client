import React from 'react'
import UserAdapter from '../adapters/UserAdapter'

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      searchTerm: ""
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

  componentDidMount() {
    const adapter = new UserAdapter()
    adapter.getUserInfo().then(json => this.setState({username: json.username}))
  }
  
  render() {
    console.log(this.state.username)
    return (
      <div id="full-width">
        <div id="left-half">
          {this.state.username}
        </div>
        <div id="right-half">
          <div className="search-form">
            <form onSubmit={this.handleSubmit}>
              <h3> Get Itinerary </h3>
              <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile