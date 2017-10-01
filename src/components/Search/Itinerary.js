import React from 'react'
import WeatherContainer from './WeatherContainer'
import Activity from './Activity'
import MapContainer from '../MapContainer'

const Itinerary = (props) => {
  return(
    <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: '1000px', margin: '0 auto'}}> 
    <div className="box b" style={{ width: '100%', position: 'relative', height: '700px'}}>
      <WeatherContainer name={props.coordinateLocations[0].location.city}/>
      <MapContainer addresses={props.coordinateLocations} initialLat={props.coordinateLocations[0].coordinates.latitude} initialLon={props.coordinateLocations[0].coordinates.longitude} zoom={10} width={'100%'} height={'50%'}/>
    </div>
    <div className="box a" style={{width: '50%', padding: '30px'}}>
        <div className="itinerary-column">
          <h1> Itinerary </h1>
          {props.activities.length > 0 ? props.activities.slice(0,4).map((business,index) => <Activity deleteActivity={props.deleteActivity} key={index} name={business.name} data={business}/>) : null}
        </div>
      </div>
      <div className="box c" style={{ width: '50%', padding: '30px'}}>
        <div className="itinerary-column">
          <h1> Food </h1>
          {props.restaurants.length > 0 ? props.restaurants.slice(0,3).map((business,index) => 
            <Activity 
              deleteActivity={props.deleteRestaurant} 
              key={index} 
              name={business.name} 
              data={business}/>
              ) : null}
        </div>
      </div>
      <div id="shuffle-button"><button onClick={props.shuffleBoth}>Shuffle</button></div>
      <div className="save-button"><button onClick={props.handleSave}>SAVE ITINERARY</button></div>
    </div>
  )
}

export default Itinerary