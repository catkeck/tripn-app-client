import React from 'react'


class Trip extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div id="activity">
        {this.props.tripData[0]}
        {this.props.tripData[1].map(activity => <p>{activity.activity}</p>)}
      </div>
    )
  }
}

export default Trip