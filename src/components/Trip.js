import React from 'react'


class Trip extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div id="activity">
        <h3>{this.props.tripData[1].replace(/\b\w/g, l => l.toUpperCase())}</h3>
        <p>{this.props.tripData[0].split("T")[0]}</p>
        {this.props.tripData[2].map((activity,index) => <p>{activity.activity}</p>)}
      </div>
    )
  }
}

export default Trip