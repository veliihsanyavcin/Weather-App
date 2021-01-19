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
import { render } from '@testing-library/react';
import Search from '../Search/Search';

class Forecast extends Component {
  constructor( props ) {
    super(props);
    this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
    
    this.state = {
      visiblity: false
    };
  }
 
  handleToggleVisiblity() {
    this.setState((prevState) => {
      return {
        visiblity: !prevState.visiblity
      };
    });
  }


    render () {
      return (
      <div className="Forecast">
          {this.visiblity}
          {this.state.visiblity && (<Search className="search" />)}
        <div className="header">
          <CurrentDate className="CurrentDate" />
          <LocationButton city="İstanbul"
          onClick={this.handleToggleVisiblity}/>
        
        </div>
  
        <div className="main">
          <Weather condition="Sunny" />
          <Degree degree={35} />
          <MinMaxDegree className="MinMaxDegree" maxDegree={"35°C"} minDegree={"27°C"} />
        </div>
  
        <div className="details">
          <WeatherDetailBlock icon={humidityIcon} value="49%" label="Humidity" />
          <WeatherDetailBlock icon={barometerIcon} value="1,007mBar" label="Pressure" />
          <WeatherDetailBlock icon={windIcon} value="23km/h" label="Wind" />
          <WeatherDetailBlock icon={sunriseIcon} value="6:03 AM" label="Sunrise" />
          <WeatherDetailBlock icon={sunsetIcon} value="7:05 PM" label="Sunset" />
          <WeatherDetailBlock icon={daytimeIcon} value="13h 1m" label="Daytime" />
        </div>
  
        <Slidebar />
        
      </div>
          );
     };
  
  }



export default Forecast;