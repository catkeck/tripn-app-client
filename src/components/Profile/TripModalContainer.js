import React from 'react'
import ReactModal from 'react-modal'
import TripModal from './TripModal'

class TripModalContainer extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false
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
      <TripModal handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} location={this.props.location} date={this.props.date} isOpen={this.state.showModal} activities={this.props.activities} food={this.props.food} />
    )
  }

}

export default TripModalContainer
