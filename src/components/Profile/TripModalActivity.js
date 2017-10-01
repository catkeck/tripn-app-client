import React from 'react'

const TripModalActivity = (props) => {

  return(
    <div className="activity">

      <div className="modal-images">
        {props.data.imageURL.length >= 1 ? <img src={props.data.imageURL} alt=""/> : <img src="default.jpg" alt="" />}
      </div>
      <div className="activity-info">
        <h3>{props.data.activity}</h3>
        <p>{props.data.address}</p>
        <p>{props.data.phone_number}</p>
      </div>
    </div>
  )

}

export default TripModalActivity