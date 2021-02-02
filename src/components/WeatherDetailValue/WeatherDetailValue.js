import React from 'react';
import './WeatherDetailValue.css';

const WeatherDetailValue = ({ children }) => {
  return (
    <div className="WeatherDetailValue">
      {children}
    </div>
  );
};

export default WeatherDetailValue;
