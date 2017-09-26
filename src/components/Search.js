import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SearchActions from '../actions/search'
import {getCurrentPosition, setSearchTerm} from '../actions/search'
import {Redirect} from 'react-router'

class Search extends React.Component {

  handleChange = (event) => {
    this.props.setSearchTerm(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.props.searchTerm.replace(',','')}`)
  }

  handleDetectLocation = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.props.coordinates}`)
  }

  componentDidMount() {
    this.props.getCurrentPosition();
  }

  render() {
    const token = localStorage.getItem("token")
    if (token === null) {
      return <Redirect to='/'/>
    } else {
      return (
        <div id="search-box">
          <form onSubmit={this.handleSubmit}>
            <h3> Get Itinerary </h3>
            <input type="text" value={this.props.searchTerm} onChange={this.handleChange}/>
            <input type="submit"/>
          </form>
          {this.props.showButton ? <div className="pad-button"><button onClick={this.handleDetectLocation}>SEARCH CURRENT LOCATION</button></div> : null }
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    coordinates: state.search.coordinates,
    searchTerm: state.search.searchTerm,
    showButton: state.search.showButton,
    isLoading: state.search.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Search)