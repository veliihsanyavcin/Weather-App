import React from 'react';
import CurrentDate from '../CurrentDate/CurrentDate';
import LocationButton from '../LocationButton/LocationButton';
import './Forecast.css';
import Weather from '../Weather/Weather';
import Degree from '../Degree/Degree';

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
      <Weather className="Weather"  info="Sunny" />
      <Degree className="Degree" degree={35} />
    </div>
  );
};

export default Forecast;
