import React from 'react';
import './PreResult.css';

const PreResult = ({ content }) => {
  return (
    <div className="PreResult">
      <div className="firstResult">
        <span>{content.cityName},{content.countryName}</span>
      </div>
      <div className="secondResult">
        <span>{content.cityName},{content.countryName}</span>
      </div>
    </div>
  );
};

export default PreResult;
