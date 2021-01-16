import React from 'react';
import windIcon from '../../assets/icons/wind.png';
import './Wind.css';

const Wind = ({ wind }) => {
  return (
    <div className="Wind">
      <img src={windIcon} />
      <h1 className="windData">{wind}</h1>
      <span className="windText">Wind</span>
    </div>
  );
};

export default Wind;
