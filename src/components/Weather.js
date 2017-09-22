import React from 'react'
import {connect} from 'react-redux'

class Weather extends React.Component {

  convertToCelsius(fahrenheit) {
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


  render() {
    console.log(this.props)
    // const getWeatherImage = this.weatherImage();
    // console.log(getWeatherImage)
    return(

      <div className="Weather">
        {this.props.weatherData.main ? <div><h1>{this.props.weatherData.main.temp} &#8457; / {this.convertToCelsius(this.props.weatherData.main.temp).toFixed(2)} &#x2103;</h1><h2>{this.props.weatherData.main.humidity} Humidity</h2><p>{this.props.weatherData.temp_min}</p><p>{this.props.weatherData.temp_max}</p><p>{this.props.weatherData.weather[0].main}({this.props.weatherData.weather[0].description})</p></div> : null}

      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    weatherData: state.itinerary.weather
  }
}


export default connect(mapStateToProps,null)(Weather)