import React from 'react'
import Trip from './Trip'

const TripsContainer = (props) =>  {
  return <div className="trips">{props.trips.map((trip,index) => <Trip key={index} tripData={trip}/>)}</div>
}

export default TripsContainer