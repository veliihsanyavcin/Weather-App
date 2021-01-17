import React from 'react';
import './DayMinMax.css';
import upVector from '../../../assets/icons/UpVector.png';
import downVector from '../../../assets/icons/DownVector.png';

const DayMinMax = ({ maxDegree, minDegree }) => {
  return (
    <div className="DayMinMax">
      <span>{maxDegree} <img src={upVector} /></span>
      <span>{minDegree} <img src={downVector} /></span>
    </div>
  );
};

export default DayMinMax;
