import React from 'react'

const Activity = (props) => {

  const handleClick = (event) => {
    props.deleteActivity(props.name)
  }

  return(
    console.log(props),
    <div className="activity">
      <div className="list-images">
        <img src={props.data.image_url} alt=""/>
      </div>
      <div className="activity-info">
        <div className="x-button">
          <button onClick={handleClick}>X</button>
        </div>
        <h2>{props.data.name}</h2>
        <p>{props.data.location ? props.data.location.display_address.join(" ") : null}</p>
        <p>{props.data.display_phone}</p>
        <p>{props.data.price ? `Price: ${props.data.price}` : null}</p>
      </div>
    </div>
  )

}

export default Activity