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
      <div>
        <button onClick={this.handleOpenModal}>View Details</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <div id="react-modal">
            <h1>{this.props.location}</h1>
            <h2>{this.props.date}</h2>
            <h3>Activities</h3>
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

 
// activity
// :
// "Musée Picasso"
// address
// :
// "5 rue de Thorigny 75003 Paris France"
// created_at
// :
// "2017-09-29T14:43:56.567Z"
// id
// :
// 20
// imageURL
// :
// "https://s3-media2.fl.yelpcdn.com/bphoto/o9J87O_pNvRDF85H6dVcwg/o.jpg"
// latitude
// :
// 48.8596006659119
// longitude
// :
// 2.36257754332198
// phone_number
// :
// "+33 1 85 56 00 36"
// schedule_id
// :
// 4
// updated_at
// :
// "2017-09-29T14:43:56.567Z"

export default TripModal
