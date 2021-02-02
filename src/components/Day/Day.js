import './Day.css';
import Forecast from '../Forecast/Forecast';
import Background from '../Background/Background';
import React, { Component } from 'react'
import cloudsIcon from '../../assets/icons/cloudy.png';
import clearIcon from '../../assets/icons/clear.png';
import atmosphereIcon from '../../assets/icons/atmosphere.png';
import drizzleIcon from '../../assets/icons/drizzle.png';
import rainIcon from '../../assets/icons/rain.png';
import snowIcon from '../../assets/icons/snow.png';
import thunderstormIcon from '../../assets/icons/thunderstorm.png';

const API_KEY = "0839af4fdfea27e9aaca59122c092fac";

class Day extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: 'Istanbul',
      lat: 41.015137,
      lon: 28.979530,
      country: undefined,
      celsius: undefined,
      tempMax: undefined,
      tempMin: undefined,
      humidity: undefined,
      pressure: undefined,
      wind: undefined,
      sunrise: undefined,
      sunset: undefined,
      daytime: undefined,
      main: undefined,
      description: "",
      icon: undefined,
      error: false,
      daily: null
    };

    this.getWeather();
  };

  // Temp to Degree
  calCelsius(temp) {
    const cell = Math.floor(temp - 273.15);
    return cell;
  };

  // Timestamp to time for sunrise,sunset
  calSunrise(sunTime) {
    const date = new Date(sunTime * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
  }

  // Timestamp to time for daytime
  calDayTime(dayTotime) {
    var a = new Date(dayTotime * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + 'h ' + min + 'm';
    return time;
  }

  // İd göre icon değişimi
  getWeatherIcon(rangeId) {
    switch (true) {
      // Thunderstorm
      case rangeId >= 200 && rangeId < 300:
        this.setState({ icon: thunderstormIcon });
        break;
      // Drizzle  
      case rangeId >= 300 && rangeId < 400:
        this.setState({ icon: drizzleIcon });
        break;
      // Rainy
      case rangeId >= 500 && rangeId < 600:
        this.setState({ icon: rainIcon });
        break;
      // Snow  
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: snowIcon });
        break;
      // Atmosphere  
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: atmosphereIcon });
        break;
      // Clear  
      case rangeId === 800:
        this.setState({ icon: clearIcon });
        break;
      // Clouds  
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: cloudsIcon });
        break;
      default:
        this.setState({ icon: cloudsIcon });
    };
  };

  // Weather bilgilerini getirme
  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&appid=${API_KEY}`);
    const response = await api_call.json();
    this.setState({
      celsius: this.calCelsius(response.current.temp),
      tempMax: this.calCelsius(response.daily[0].temp.max),
      tempMin: this.calCelsius(response.daily[0].temp.min),
      humidity: response.current.humidity,
      pressure: ((response.current.pressure) / 1000).toFixed(3),
      wind: response.current.wind_speed,
      sunrise: this.calSunrise(response.current.sunrise),
      sunset: this.calSunrise(response.current.sunset),
      sunsetBg: response.current.sunset,
      description: response.current.weather[0].main,
      daytime: this.calDayTime((response.current.sunset) - (response.current.sunrise)),
      daily: response.daily
    });

    this.getWeatherIcon(response.current.weather[0].id);
  };

  // Seçilen şehirin güncellenmesi
  handleCityChange = (res) => {
    this.setState({
      city: res.city,
      lat: res.lat,
      lon: res.lon
    }, () => this.getWeather());
  }

  render() {
    return (
      <div className="Day">
        <Background sunset={this.state.sunsetBg} />
        <Forecast
          onCityChanged={this.handleCityChange}
          city={this.state.city}
          temp_celsius={this.state.celsius}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind={this.state.wind}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          description={this.state.description}
          weatherIcon={this.state.icon}
          dayTime={this.state.daytime}
          daily={this.state.daily}
        />
      </div>
    );
  };
};

export default Day;