import React from 'react'
import TripModal from './TripModal'

const Trip = (props) => {
  const location = props.tripData[1].replace(/\b\w/g, l => l.toUpperCase())
  const date = props.tripData[0].split("T")[0]
  const activities = props.tripData[2].slice(0,4)
  const food = props.tripData[2].slice(4,7)
  return (
    <div className="trip">
      <h3>{location} ({date})</h3>
      <h4>Activities</h4>
      {activities.map((activity,index) => <p>{activity.activity}</p>)}
      <h4>Food</h4>
      {food.map((activity,index) => <p>{activity.activity}</p>)}
      <TripModal location={location} date={date} activities={activities} food={food}/>
    </div>
  )
}

export default Trip