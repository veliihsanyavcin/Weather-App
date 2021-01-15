import React from 'react';
import sunnyicon from '../../assets/icons/sunnyicon.png';

const Weather = ({ info }) => {
  return (
    <div className="Weather">
      <span>{info}</span>
      <img src={sunnyicon} className="sunnyicon" />
    </div>
  );
};

export default Weather;
