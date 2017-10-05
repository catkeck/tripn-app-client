import React from 'react'
import ReactModal from 'react-modal'

 const styles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)'
      },
      content : {
        position                   : 'absolute',
        top                        : '250px',
        left                       : '40px',
        right                      : '40px',
        bottom                     : '300px',
        border                     : '1px solid #ccc',
        background                 : 'rgb(255, 255, 255)',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '50px'

    }
  }

const UberModal = (props) => {
  return (
    <div className="details" >
      <button id="book-ride" onClick={props.handleOpenModal}>VIEW TRIP DETAILS</button>
      <ReactModal 
        isOpen={props.isOpen}
        style={styles}>
        <div id="react-modal">
          <h1>Estimated Cost: {props.pricing.fare.display} {props.pricing.fare.currency_code}</h1>
          <h2>Distance: {props.pricing.trip.distance_estimate} {props.pricing.trip.distance_unit}s</h2>
          <h2>Approximate Length of Trip: {props.pricing.trip.duration_estimate}seconds</h2>
          <button id="book-ride" onClick={props.bookRide}>Book Ride</button>
          <button id="close-button" onClick={props.handleCloseModal}>Close</button>
        </div>
      </ReactModal>
    </div>
  )
}

export default UberModal
