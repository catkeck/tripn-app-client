import React from 'react'

class Activity extends React.Component {

  handleClick = (event) => {
    this.props.deleteActivity(this.props.name)
  }


  render() {


    return(
      <div className="activity">
        <div className="list-images">
          <img src={this.props.data.image_url} alt=""/>
        </div>
        <div className="activity-info">
          <div className="x-button">
            <button onClick={this.handleClick}>X</button>
          </div>
          <h2>{this.props.data.name}</h2>
          <p>{this.props.data.location.display_address}</p>
          <p>{this.props.data.display_phone}</p>
          <p>{this.props.price}</p>
        </div>
      </div>
    )
  }

}

export default Activity