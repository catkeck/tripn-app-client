import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import { bindActionCreators } from 'redux'
import * as UberActions from '../../actions/uber'
import UberModalContainer from './UberModalContainer'
import swal from 'sweetalert'

class UberProduct extends React.Component {

  getPriceEstimate = () => {
    this.props.getPriceEstimate(this.props.token,this.props.currentLatitude,this.props.currentLongitude,this.props.desiredLatitude,this.props.desiredLongitude)
  }

  bookRide = () => {
    this.props.bookRide(this.props.token,this.props.pricing.fare.fare_id, this.props.currentLatitude, this.props.currentLongitude, this.props.desiredLatitude, this.props.desiredLongitude)
    if (this.props.rideStatus !== null && this.props.ridStatus !== "") {
      {this.props.rideStatus==="processing" ? swal("Your ride is booked!", "Please wait patiently",'success') : swal("Sorry, but there was an error booking your ride.", "Please try again later",'error')}
    }
  }

  render() {
    return(
      <div>   
        <div className="uber-info">
          <div className="uber-image">
            <img src={this.props.image} alt=""/>
          </div>
          <h1>{this.props.display_name}</h1>
          <p>{this.props.description}</p>
          <p>Can hold up to {this.props.capacity} people</p>
          <p>Cost: ${this.props.price_details.base}</p>
          <p>Cancellation fee: {this.props.price_details.cancellation_fee}</p>
          <p>cost per {this.props.price_details.distance_unit}: {this.props.price_details.cost_per_distance} {this.props.price_details.currency_code}</p>
          <div className="pad-button">
            <button onClick={this.getPriceEstimate}>Get Estimate</button>
          </div>
        </div>

        <div>
          {this.props.pricing && this.props.pricing.fare ? <UberModalContainer pricing={this.props.pricing} bookRide={this.bookRide} rideStatus={this.props.rideStatus}/> : null}
        </div>
      </div>
    ) 
  }

}



      //         <a href="#">
      //   <div className="label" onClick={props.handleOpenModal}>
      //     <h1>View Details</h1>
      //   </div>
      // </a>

function mapStateToProps(state) {
  return {
    pricing: state.uber.pricing,
    rideStatus: state.uber.rideStatus
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UberActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UberProduct)

  
