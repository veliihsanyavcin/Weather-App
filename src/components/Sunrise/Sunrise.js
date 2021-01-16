import React from 'react';
import sunriseIcom from '../../assets/icons/sunrise.png';
import './Sunrise.css';

const Sunrise = ({ sunriseTime }) => {
  return (
    <div className="Sunrise">
      <img src={sunriseIcom} />
      <h1 className="sunriseData">{sunriseTime}</h1>
      <span className="sunriseText">Sunrise</span>
    </div>
  );
};

export default Sunrise;
