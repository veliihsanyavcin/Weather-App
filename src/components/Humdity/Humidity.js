import React from 'react';
import humidityIcon from '../../assets/icons/humidity.png';
import './Humidity.css';

const Humidity = ({ humidty }) => {
  return (
    <div className="Humidity">
      <img src={humidityIcon} />
      <h1 className="humidityData">{humidty}</h1>
      <span className="humidityText">Humidity</span>
    </div>
  );
};

export default Humidity;
