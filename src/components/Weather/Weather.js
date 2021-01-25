import React from 'react';

const Weather = ({ icon, condition }) => {
  return (
    <div className="Weather">
      <div className="si">
        <img src={icon} />
      </div>
      <div className="tx">
        <span className="text">{condition}</span>
      </div>
    </div>
  );
};

export default Weather;  
