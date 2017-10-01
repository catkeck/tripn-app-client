import React from 'react'
import ReactModal from 'react-modal'
import TripModalActivity from './TripModalActivity'

class TripModal extends React.Component {

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
    {this.props.activities && this.props.food ?
    console.log(this.props.activities, this.props.food)
    : null }
    return (
      <div className="details" >
        <a href="#">
          <div className="label" onClick={this.handleOpenModal}>
            <h1>{this.props.location} - {this.props.date}</h1>
            <h1>View Details</h1>
          </div>
        </a>
        <ReactModal 
           isOpen={this.state.showModal}
           style={{width: '60%'}}
        >
          <div id="react-modal">
            <h1>{this.props.location}</h1>
            <h2>{this.props.date}</h2>
            <h1>Activities</h1>
            {this.props.activities.map((activity,index) => <TripModalActivity data={activity}/>)}
            <h1>Food</h1>
            {this.props.food.map((activity,index) => <TripModalActivity data={activity}/>)}
          </div>
          <button id="close-button" onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
      </div>
    );
  }

}


export default TripModal
