import React from 'react';
import './Weather.css';
import cloudyIcon from '../../../assets/icons/cloudy.png';

const Weather = ({ condition }) => {
  return (
    <div className="Weather">
    <div className="si">
      <img src={cloudyIcon} className="sunnyicon" />
    </div>
    <div className="tx">
      <span className="text">{condition}</span>
    </div>
  </div>
  );
};

export default Weather;
