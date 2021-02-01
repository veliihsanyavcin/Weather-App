import React, { Component } from 'react';
import CurrentDate from '../CurrentDate/CurrentDate';
import Degree from '../Degree/Degree';
import LocationButton from '../LocationButton/LocationButton';
import MinMaxDegree from '../MinMaxDegree/MinMaxDegree';
import Slidebar from '../Slidebar/Slidebar';
import Weather from '../Weather/Weather';
import WeatherDetailBlock from '../WeatherDetailBlock/WeatherDetailBlock';
import './Forecast.css';
import barometerIcon from '../../assets/icons/barometer.png';
import windIcon from '../../assets/icons/wind.png';
import sunriseIcon from '../../assets/icons/sunrise.png';
import sunsetIcon from '../../assets/icons/sunset.png';
import daytimeIcon from '../../assets/icons/daytime.png';
import humidityIcon from '../../assets/icons/humidity.png';
import Search from '../Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import '../Day/Day';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);

    this.state = {
      visiblity: false,
    };
  };

  handleToggleVisiblity() {
    this.setState((prevState) => {
      return {
        visiblity: !prevState.visiblity,
      };
    });
  };

  handleCityChange = (res) => {
    this.setState({ visiblity: false });
    this.props.onCityChanged(res);
  }

  render() {
    return (
      <div className="Forecast">
        {this.visiblity}
        {this.state.visiblity && (<Search onItemSelected={this.handleCityChange} visiblity={this.state.visiblity} />)}

        <div className="header">
          <CurrentDate className="CurrentDate" />
          <LocationButton city={this.props.city}
            onClick={this.handleToggleVisiblity} />
        </div>

        <div className="main">
          <Weather icon={this.props.weatherIcon} condition={this.props.description} />
          <Degree degree={this.props.temp_celsius} />
          <MinMaxDegree className="MinMaxDegree" maxDegree={`${this.props.tempMax}°C`} minDegree={`${this.props.tempMin}°C`} />
        </div>

        <div className="detailsOne">
          <WeatherDetailBlock icon={humidityIcon} value={`${this.props.humidity}%`} label="Humidity" />
          <WeatherDetailBlock icon={barometerIcon} value={`${this.props.pressure}mBar`} label="Pressure" />
          <WeatherDetailBlock icon={windIcon} value={`${this.props.wind} km/h`} label="Wind" />
        </div>

        <div className="detailsTwo">
          <WeatherDetailBlock icon={sunriseIcon} value={`${this.props.sunrise} AM`} label="Sunrise" />
          <WeatherDetailBlock icon={sunsetIcon} value={`${this.props.sunset} PM`} label="Sunset" />
          <WeatherDetailBlock icon={daytimeIcon} value={`${this.props.dayTime}`} label="Daytime" />
        </div>

        <Slidebar weatherIcon={this.props.weatherIcon} daily={this.props.daily} />

      </div>
    );
  };

}

export default Forecast;