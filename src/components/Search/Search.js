import React from 'react'
import MapSearch from './MapSearch'

const Search = (props) => {

  const handleDetectLocation = () => {
    props.handleDetectLocation()
  }
console.log(props)
  return (
    
    <div className="wrapper"> 
      <div className="box search-box">
        <p> Discover today's itinerary by entering a location below/clicking the current location button:</p>
        <form onSubmit={props.handleSubmit}>
          <h1> Get Itinerary </h1>
          <input type="text" value={props.searchTerm} onChange={props.handleChange} style={{ margin: '0 auto'}}/>
          <input type="submit"/>
        </form>
        {props.showButton ? <div className="pad-button"><button onClick={handleDetectLocation}>SEARCH CURRENT LOCATION</button></div> : null }
      </div>
      <div className="box map-box" >
        <h1> - OR - </h1>
        <p> by selecting your location on the map below: </p>
        <MapSearch history={props.history}/>
      </div>`
    </div>
  )
}

export default Search