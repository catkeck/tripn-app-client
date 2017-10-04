import React from 'react'
import ReactModal from 'react-modal'


const UberModal = (props) => {
  return (
    <div className="details" >

      <ReactModal 
        isOpen={props.isOpen}
        style={{width: '20%'}}
      >
        <div id="react-modal">
          <h1>{props.pricing.fare.display} {props.pricing.fare.currency_code}</h1>
          <h2>{props.pricing.trip.distance_estimate} {props.pricing.trip.distance_unit}</h2>
          <p>{props.pricing.trip.duration_estimate}</p>
          <button onClick={props.bookRide}>Book Ride</button>
        </div>
        <button id="close-button" onClick={props.handleCloseModal}>Close</button>
      </ReactModal>
    </div>
  )
}

export default UberModal

