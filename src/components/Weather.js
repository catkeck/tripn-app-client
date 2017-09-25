import React from 'react'
import {connect} from 'react-redux'

const Weather = (props) => {

  const convertToCelsius = (fahrenheit) => {
    return (fahrenheit-32)*5/9
  }

  // weatherImage = () => {
  //   let weatherIcon = ""
  //   console.log(this.props.weatherData)
  //   if (this.props.weatherData.weather && this.props.weatherData.weather[0].description.includes("clear")) {
  //     return `&#x263c;`
  //   } else if ((his.props.weatherData.weather && this.props.weatherData.weather[0].description.includes("rain")))
  // //   return weatherIcon
  // }

  return(

    <div className="Weather">
      {props.weatherData.main ? <div><h1>Current Weather in {props.location.charAt(0).toUpperCase() + props.location.slice(1)}</h1><h1>{props.weatherData.main.temp} &#8457; / {convertToCelsius(props.weatherData.main.temp).toFixed(2)} &#x2103;</h1><h2>{props.weatherData.main.humidity} Humidity</h2><p>{props.weatherData.temp_min}</p><p>{props.weatherData.temp_max}</p><p>{props.weatherData.weather[0].main}({props.weatherData.weather[0].description})</p></div> : null}

    </div>
  )
}


function mapStateToProps(state) {
  return {
    weatherData: state.itinerary.weather,
    location: state.itinerary.location
  }
}


export default connect(mapStateToProps,null)(Weather)