import './Day.css';
import Forecast from '../Forecast/Forecast';
import Background from '../Background/Background';
import React, { Component } from 'react'
import cloudsIcon from '../../assets/icons/cloudy.png';

const API_KEY = "0839af4fdfea27e9aaca59122c092fac";

class Day extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cty: undefined,
      country: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      humidity: undefined,
      pressure: undefined,
      wind: undefined,
      sunrise: undefined,
      sunset: undefined,
      daytime: undefined,
      main: undefined,
      description: "",
      icon: undefined,
      error: false

    };

    this.getWeather();
  };

  calCelsius(temp) {
    const cell = Math.floor(temp - 273.15);
    return cell;
  };

  calSunrise(sunTime) {
    const date = new Date(sunTime * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;

  }

  calDaytime(){
    
  }

  get_WeatherIcon(rangeId) {
    switch (true) {
      // Thunderstorm
      case rangeId >= 200 && rangeId < 300:
        this.setState({ icon: null });
        break;
      // Drizzle  
      case rangeId >= 300 && rangeId < 400:
        this.setState({ icon: null });
        break;
      // Rainy
      case rangeId >= 500 && rangeId < 600:
        this.setState({ icon: cloudsIcon });
        break;
      // Snow  
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: null });
        break;
      // Atmosphere  
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: null });
        break;
      // Clear  
      case rangeId === 800:
        this.setState({ icon: null });
        break;
      // Clouds  
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: cloudsIcon});
        break;
      default:
        this.setState({ icon: null });
    };
  };

  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=41.015137&lon=28.979530&appid=${API_KEY}`);
    const response = await api_call.json();

    console.log(response);

    this.setState({
      cty: response.timezone,
      celsius: this.calCelsius(response.current.temp),
      temp_max: this.calCelsius(response.current.temp.max),
      temp_min: this.calCelsius(response.current.temp.min),
      humidity: response.current.humidity,
      pressure: ((response.current.pressure)/1000).toFixed(3),
      wind: response.current.wind_speed,
      sunrise: this.calSunrise(response.current.sunrise),
      sunset: this.calSunrise(response.current.sunset),
      description: response.current.weather[0].main,
      daytime:(this.calSunrise(response.current.sunset)-this.calSunrise(response.current.sunrise))
    });

    this.get_WeatherIcon(response.current.weather[0].id);
  };

  render() {
    return (
      <div className="Day">
        <Background night={true} />
        <Forecast
          cty={this.state.cty}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind={this.state.wind}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          description={this.state.description}
          weatherIcon={this.state.icon}
          dayTime={this.state.daytime}
           />
      </div>
    );
  };
};

export default Day;