import React from 'react';
import './Weather.css'

const Weather = ({ icon, condition }) => {
  return (
    <div className="Weather">
      <div className="si">
        <img src={icon} alt="description" />
      </div>
      <div className="tx">
        <span className="text">{condition}</span>
      </div>
    </div>
  );
};

export default Weather;  
