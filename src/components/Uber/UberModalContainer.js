import React from 'react'
import ReactModal from 'react-modal'
import UberModal from './UberModal'

class UberModalContainer extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false,
    };
  }
  
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <UberModal handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal}  isOpen={this.state.showModal} pricing={this.props.pricing} bookRide={this.props.bookRide} rideStatus={this.props.rideStatus}/>
    )
  }

}

export default UberModalContainer
