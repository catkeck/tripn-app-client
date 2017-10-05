import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import { bindActionCreators } from 'redux'
import * as UberActions from '../../actions/uber'
import Popup from 'react-popup'

class Uber extends React.Component {

  componentDidMount() {
    if (this.props.currentLocation !== "") {
      this.props.getEstimatesForUserLocation(this.props.currentLocation.split(",")[0], this.props.currentLocation.split(",")[1], this.props.coordinates.latitude, this.props.coordinates.longitude)
    }
  }

  saveCoordinates = () => {
    localStorage.setItem("CurrentLocationLatitude", this.props.currentLocation.split(",")[0])
    localStorage.setItem("CurrentLocationLongitude", this.props.currentLocation.split(",")[1])
    localStorage.setItem("DesiredLocationLongitude", this.props.coordinates.longitude)
    localStorage.setItem("DesiredLocationLatitude", this.props.coordinates.latitude)

  }

  authorize = () => {
    const code = this.props.location.search.split("=")[1]
    this.props.authorize(code)

  }
  render() {
    return(
      <div className="uber-button">
        <a href='https://login.uber.com/oauth/v2/authorize?client_id=SPJ6ABS79wvt56KnjwID5WdjTXNE-DIS&response_type=code&scope=request%20ride_widgets' target="_blank_">
          <img src= '../uberbutton.jpg' alt='' onClick={this.saveCoordinates}/>
        </a>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    costs: state.uber.costs
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UberActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Uber)