import React from 'react';
import CurrentDate from '../CurrentDate/CurrentDate';
import LocationButton from '../LocationButton/LocationButton';
import './Forecast.css';
import Weather from '../Weather/Weather';
import Degree from '../Degree/Degree';
import MinMaxDegree from '../MinMaxDegree/MinMaxDegree';
import Humidity from '../Humdity/Humidity';
import Pressure from '../Pressure/Pressure';
import Wind from '../Wind/Wind';
import Sunrise from '../Sunrise/Sunrise';
import Sunset from '../Sunset/Sunset';
import Daytime from '../Daytime/Daytime';

const Forecast = () => {
  function onLocationClick() {
    alert('Location Button Clicked');
  }

  return (
    <div className="Forecast">
      <div className="header">
        <CurrentDate className="CurrentDate" />
        <LocationButton city="Istanbul" onClick={onLocationClick} />
      </div>
        <Weather className="Weather"  condition="Sunny" />
        <Degree className="Degree" degree={35} />
        <MinMaxDegree className="MinMaxDegree" maxDegree={"35°C"} minDegree={"27°C"} />
        <Humidity className="Humidity" humidty={"49%"} />
        <Pressure className="Pressure" pressure={"1,007mBar"} />
        <Wind className="Wind" wind={"23km/h"} />
        <Sunrise className="Sunrise" sunriseTime={"6:03 AM"} />
        <Sunset className="Sunset" sunsetTime={"7:05 PM"} />
        <Daytime className="Daytime" dayTime={"13h 1m"} />
    </div>
  );
};

export default Forecast;
