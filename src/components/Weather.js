import React from 'react'

class Weather extends React.Component {
  constructor() {
    super()
    this.state={
      weatherData: "",
      weatherImg: ""
    }
  }

  componentDidMount() {
    if (isNaN(this.props.location.charAt(0))) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.location}&units=imperial&APPID=48dbda7652d5e2242d78ded92f4dea55`).then(response => response.json()).then(json => this.setState({weatherData: json}))
    }
    else {
      const latlon = this.props.location.split(",")
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&units=imperial&APPID=48dbda7652d5e2242d78ded92f4dea55`).then(response => response.json()).then(json => this.setState({weatherData: json}))
    }
  }

  convertToCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9
  }

  weatherImage(char) {
    if (char==="d") {
      if (this.state.weatherData.weather[0].description.includes("clear")) {
        this.setState({weatherImg: "sunny.png"})
      }
    } else {
      if (this.state.weatherData.weather[0].description.includes("clear")) {
        this.setState({weatherImg: "clear-night.png"})
      }     
    }
  }


  render() {
    console.log(this.state.weatherData)
    return(

      <div className="Weather">
        {this.state.weatherData.main ? <div><img src={this.state.weatherImg} alt=""/><h1>{this.state.weatherData.main.temp} degrees F/{this.convertToCelsius(this.state.weatherData.main.temp).toFixed(2)} degrees C</h1><h2>{this.state.weatherData.main.humidity} Humidity</h2><p>{this.state.weatherData.temp_min}</p><p>{this.state.weatherData.temp_max}</p><p>{this.state.weatherData.weather[0].main}({this.state.weatherData.weather[0].description})</p></div> : null}

      </div>
    )
  }

}

export default Weather