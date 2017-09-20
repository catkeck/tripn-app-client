import React from 'react'

class Activity extends React.Component {

  handleClick = (event) => {
    this.props.deleteActivity(this.props.name)
  }


  render() {


    return(
      <div><div className="list-images"><img src={this.props.data.image_url} alt=""/></div><h2>{this.props.data.name}</h2><p>{this.props.data.location.display_address}</p><p>{this.props.data.display_phone}</p><p>{this.props.price}</p><button onClick={this.handleClick}>Delete</button></div>
    )
  }

}

export default Activity