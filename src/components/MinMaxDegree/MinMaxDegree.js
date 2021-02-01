import React from 'react';
import upVector from '../../assets/icons/up.svg';
import downVector from '../../assets/icons/down.svg';
import './MinMaxDegree.css';

const MinMaxDegree = ({ maxDegree, minDegree }) => {
  return (
    <div className="MinMaxDegree">
      <div className="maxDegree">
        <span>{maxDegree} <img src={upVector} /></span>
      </div>
      <div className="minDegree">
        <span>{minDegree} <img src={downVector} /></span>
      </div>
    </div>
  );
};

export default MinMaxDegree;
