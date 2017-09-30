import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SearchActions from '../actions/search'
import {getCurrentPosition, setSearchTerm} from '../actions/search'
import {Redirect} from 'react-router'
import Select from 'react-select';
import Calendar from './Calendar'
import MapSearch from './MapSearch'

class Search extends React.Component {

  handleSelectChange = (value) => {
    this.setState({value});
  }

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
        <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: '1000px', margin: '0 auto'}}> 
          <div className="box a" style={{width: '100%', padding: '30px'}}>
            <form onSubmit={this.handleSubmit}>
              <h1> Get Itinerary </h1>
              <input type="text" value={this.props.searchTerm} onChange={this.handleChange} style={{ margin: '0 auto'}}/>
              <input type="submit"/>
            </form>
            {this.props.showButton ? <div className="pad-button"><button onClick={this.handleDetectLocation}>SEARCH CURRENT LOCATION</button></div> : null }
          </div>
          <div className="box b" style={{ width: '100%', position: 'relative', height: '500px'}}>
            <MapSearch history={this.props.history}/>
          </div>
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