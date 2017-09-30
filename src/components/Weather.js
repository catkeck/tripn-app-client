import React from 'react'
import {connect} from 'react-redux'

class Weather extends React.Component {

  convertToCelsius = (fahrenheit) => {
    return (fahrenheit-32)*5/9
  }
                  
  weatherImage = () => {
    if (this.props.weatherData && this.props.weatherData.weather) {
      const description = this.props.weatherData.weather[0].description
      const dayOrNight = this.props.weatherData.weather[0].icon[2]
      if (dayOrNight === "d") {
        return this.dayIcons(description)
      } else {
        return this.nightIcons(description)
      }
    }
  }

  dayIcons = (description) => {
    if (description.includes("clouds")) {
      return <i className="wi wi-day-cloudy"></i>
    } else if (description.includes("sunny") || description.includes("clear")) {
      return <i className="wi wi-day-sunny"></i>
    } else if (description.includes("foggy")) {
      return <i className="wi wi-day-foggy"></i>
    } else if (description.includes("rain")) {
      return <i className="wi wi-day-showers"></i>
    } else if (description.includes("haze")) {
      return <i className="wi wi-day-haze"></i>
    } else if (description.includes("sleet")) {
      return <i className="wi wi-day-sleet"></i>
    } else if (description.includes("thunderstorm")) {
      return <i className="wi wi-day-thunderstorm"></i>
    }
  }

  nightIcons = (description) => {
    console.log(description)
    if (description.includes("clouds")) {
      return <i className="wi wi-night-cloudy"></i>
    } else if (description.includes("clear")) {
      return <i className="wi wi-night-clear"></i>
    } else if (description.includes("foggy")) {
      return <i className="wi wi-night-foggy"></i>
    } else if (description.includes("rain")) {
      return <i className="wi wi-night-showers"></i>
    } else if (description.includes("haze")) {
      return <i className="wi wi-night-fog"></i>
    } else if (description.includes("sleet")) {
      return <i className="wi wi-night-sleet"></i>
    } else if (description.includes("thunderstorm")) {
      return <i className="wi wi-night-alt-thunderstorm"></i>
    }
  }

  render() {
    const weatherImage = this.weatherImage();
    return (<div>{this.props.weatherData.main ? 
        <div className="weather">
          <h1>Current Weather in {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h1>
          <h1>{this.props.weatherData.main.temp} &#8457; / {this.convertToCelsius(this.props.weatherData.main.temp).toFixed(2)} &#x2103;</h1>
          <h2>{this.props.weatherData.main.humidity} Humidity</h2>
          <p>{this.props.weatherData.temp_min}</p>
          <p>{this.props.weatherData.temp_max}</p>
          <p>{this.props.weatherData.weather[0].main} ({this.props.weatherData.weather[0].description})</p>
          {weatherImage}
        </div> : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weatherData: state.itinerary.weather,
    location: state.itinerary.location
  }
}

export default connect(mapStateToProps,null)(Weather)