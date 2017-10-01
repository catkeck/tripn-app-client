import React from 'react'
import ReactModal from 'react-modal'
import TripModalActivity from './TripModalActivity'

const TripModal = (props) => {
  return (
    <div className="details" >
      <a href="#">
        <div className="label" onClick={props.handleOpenModal}>
          <h1>{props.location} - {props.date}</h1>
          <h1>View Details</h1>
        </div>
      </a>
      <ReactModal 
        isOpen={props.isOpen}
        style={{width: '60%'}}
      >
        <div id="react-modal">
          <h1>{props.location}</h1>
          <h2>{props.date}</h2>
          <h1>Activities</h1>
          {props.activities.map((activity,index) => <TripModalActivity data={activity}/>)}
          <h1>Food</h1>
          {props.food.map((activity,index) => <TripModalActivity data={activity}/>)}
        </div>
        <button id="close-button" onClick={props.handleCloseModal}>Close</button>
      </ReactModal>
    </div>
  )
}

export default TripModal
