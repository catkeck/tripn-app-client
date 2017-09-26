import React from 'react'


const Trip = (props) => {
  return (
    <div className="trip">
      <h3>{props.tripData[1].replace(/\b\w/g, l => l.toUpperCase())}</h3>
      <p>{props.tripData[0].split("T")[0]}</p>
      {props.tripData[2].map((activity,index) => <p>{activity.activity}</p>)}
    </div>
  )
}

export default Trip