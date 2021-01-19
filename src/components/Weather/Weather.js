import React from 'react';
import sunnyicon from '../../assets/icons/sunnyicon.png';

const Weather = ({ condition }) => {
  return (
    <div className="Weather">
      <div className="si">
        <img src={sunnyicon} className="sunnyicon" />
      </div>
      <div className="tx">
        <span className="text">{condition}</span>
      </div>
    </div>
  );
};

export default Weather;
