import React from 'react'

const Weather = (props) => {
  return (
    <div className="weather">
      <h1>Current Weather in {props.location}</h1>
      <h1>{props.weatherData.main.temp} &#8457; / {props.celsius} &#x2103;</h1>
      <h2>{props.weatherData.main.humidity} Humidity</h2>
      <p>{props.weatherData.temp_min}</p>
      <p>{props.weatherData.temp_max}</p>
      <p>{props.weatherData.weather[0].main} ({props.weatherData.weather[0].description})</p>
      {props.weatherImage}
    </div>
  )
}

export default Weather