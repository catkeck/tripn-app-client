import React from 'react'
import TripModal from './TripModal'




const Trip = (props) => {


  const location = props.tripData[1].replace(/\b\w/g, l => l.toUpperCase())
  const date = props.tripData[0].split("T")[0]
  const activities = props.tripData[3].slice(0,4)
  const food = props.tripData[3].slice(4,7)
  return (
    <div className="trip" style={{backgroundImage: `url(${props.tripData[2]})`, backgroundSize: 'cover'}}>
      <h3>{location} ({date})</h3>
      <TripModal location={location} date={date} activities={activities} food={food}/>
    </div>
  )
}

export default Trip