import React from 'react';
import WeatherDetailLabel from '../WeatherDetailLabel/WeatherDetailLabel';
import WeatherDetailValue from '../WeatherDetailValue/WeatherDetailValue';
import './WeatherDetailBlock.css';

const WeatherDetailBlock = ({ icon, value, label, hasShadow }) => {
  return (
    <div className={`WeatherDetailBlock ${hasShadow ? 'hasShadow' : ''}`}>
      <img className="detailIcon" src={icon} />  
      <WeatherDetailValue>{value}</WeatherDetailValue>
      <WeatherDetailLabel>{label}</WeatherDetailLabel>
   </div>
  );
};

export default WeatherDetailBlock;
