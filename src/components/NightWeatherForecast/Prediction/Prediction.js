import React from 'react';
import CurrentDate from '../CurrentDate/CurrentDate';
import LocationButton from '../LocationButton/LocationButton';
import Weather from '../Weather/Weather';
import Degree from '../Degree/Degree';
import './Prediction.css';
import MinMaxDegree from '../MinMaxDegree/MinMaxDegree';
import WeatherDetailBlock from '../WeatherDetailBlock/WeatherDetailBlock';
import barometerIcon from '../../../assets/icons/barometer.png';
import windIcon from '../../../assets/icons/wind.png';
import sunriseIcon from '../../../assets/icons/sunrise.png';
import sunsetIcon from '../../../assets/icons/sunset.png';
import daytimeIcon from '../../../assets/icons/daytime.png';
import humidityIcon from '../../../assets/icons/humidity.png';
import Slidebar from '../Slidebar/Slidebar';

const Prediction = () => {
  function onLocationClick() {
    alert('GECE AÇILDI..');
  }
  return (
    <div className="Prediction">
      <div className="header">
        <CurrentDate className="CurrentDate" />
        <LocationButton city="İstanbul" onClick={onLocationClick} />
      </div>
      <div className="main">
        <Weather condition="Cloudy" />
        <Degree degree={26} />
        <MinMaxDegree className="NightMinMax" maxDegree={"35°C"} minDegree={"27°C"} />
      </div>
      <div className="details">
        <WeatherDetailBlock icon={humidityIcon} value="73%" label="Humidity" />
        <WeatherDetailBlock icon={barometerIcon} value="1,009mBar" label="Pressure" />
        <WeatherDetailBlock icon={windIcon} value="11km/h" label="Wind" />
        <WeatherDetailBlock icon={sunriseIcon} value="6:03 AM" label="Sunrise" />
        <WeatherDetailBlock icon={sunsetIcon} value="7:05 PM" label="Sunset" />
        <WeatherDetailBlock icon={daytimeIcon} value="13h 1m" label="Daytime" />
      </div>
      <Slidebar />
    </div>
  );
};

export default Prediction;
