import React from 'react';
import sunsetIcon from '../../assets/icons/sunset.png';
import './Sunset.css';

const Sunset = ({ sunsetTime }) => {
  return (
    <div className="Sunset">
      <img src={sunsetIcon} />
      <h1 className="sunsetData">{sunsetTime}</h1>
      <span className="sunsetText">Sunset</span>
    </div>
  );
};

export default Sunset;
