import React from 'react';
import barometerIcon from '../../assets/icons/barometer.png';
import './Pressure.css';

const Pressure = ({ pressure }) => {
  return (
    <div className="Pressure">
      <img src={barometerIcon} />
      <h1 className="pressureData">{pressure}</h1>
      <span className="pressureText">Pressure</span>
    </div>
  );
};

export default Pressure;
