import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SearchActions from '../../actions/search'
import {Redirect} from 'react-router'
import Search from './Search'
class SearchContainer extends React.Component {

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
    this.props.history.history.push(`/search/${this.props.coordinates}?currentLocation`)
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
        <Search handleSubmit={this.handleSubmit} searchTerm={this.props.searchTerm} handleChange={this.handleChange} handleDetectLocation={this.handleDetectLocation} history={this.props.history} showButton={this.props.showButton} coordinates={this.props.coordinates} />
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


export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer)