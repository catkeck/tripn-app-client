import React from 'react'
import Trip from './Trip'
class TripsContainer extends React.Component {

  render() {
    return <div>{this.props.trips.map((trip,index) => <Trip key={index} tripData={trip}/>)}</div>
  }
}

export default TripsContainer