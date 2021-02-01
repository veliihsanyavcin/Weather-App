import React from 'react';
import './DayMinMax.css';
import upVector from '../../assets/icons/up.svg';
import downVector from '../../assets/icons/down.svg';

const DayMinMax = ({ maxDegree, minDegree }) => {
  return (
    <div className="DayMinMax">
      <span className="dg1">{maxDegree} </span><img className="vector" src={upVector} />
      <span className="dg2">{minDegree} </span><img className="vector" src={downVector} />
    </div>
  );
};

export default DayMinMax;
