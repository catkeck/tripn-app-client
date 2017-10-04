import React from 'react'
import Uber from '../Uber/Uber'

const Activity = (props) => {

  const handleClick = (event) => {
    props.deleteActivity(props.name)
  }

  return(
    <div className="activity">
      <div className="list-images">
        {props.data.image_url.length >= 1 ? <img src={props.data.image_url} alt=""/> : <img src="default.jpg" alt="" />}
      </div>
      <div className="activity-info">
        <div className="x-button">
          <button onClick={handleClick}>X</button>
        </div>
        <h3>{props.data.name}</h3>
        <p>{props.data.location ? props.data.location.display_address.join(" ") : null}</p>
        <p>{props.data.display_phone}</p>
        <p>{props.data.price ? `Price: ${props.data.price}` : null}</p>
        {props.showUber ? <Uber currentLocation={props.currentLocation} coordinates={props.data.coordinates} /> : null}
      </div>
    </div>
  )
}

export default Activity