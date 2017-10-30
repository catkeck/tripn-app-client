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

class UberModal extends React.Component {

  closeAll = () => {
    this.props.handleCloseModal();
  }

  render() {
    return (
    <div className="details" >
      <button id="book-ride" onClick={this.props.handleOpenModal}>VIEW TRIP DETAILS</button>
      <ReactModal 
        isOpen={this.props.isOpen}
        style={styles}>
        <div id="react-modal">
          <h1>Estimated Cost: {this.props.pricing.fare.display} {this.props.pricing.fare.currency_code}</h1>
          <h2>Distance: {this.props.pricing.trip.distance_estimate} {this.props.pricing.trip.distance_unit}s</h2>
          <h2>Approximate Length of Trip: {this.props.pricing.trip.duration_estimate}seconds</h2>
          <button id="book-ride" onClick={this.props.bookRide}>Book Ride</button>
          <button id="close-button" onClick={this.closeAll}>Close</button>
        </div>
      </ReactModal>
    </div>
  )
  }
  
}

export default UberModal
