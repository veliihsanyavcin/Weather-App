import React from 'react';
import upVector from '../../../assets/icons/UpVector.png';
import downVector from '../../../assets/icons/DownVector.png';
import './MinMaxDegree.css';

const MinMaxDegree = ({ maxDegree, minDegree }) => {
  return (
    <div className="MinMaxDegree">
      <div className="maxDegree">
        <h1>{maxDegree} <img src={upVector} /></h1>
      </div>
      <div className="minDegree">
        <h1>{minDegree} <img src={downVector} /></h1>
      </div>
    </div>
  );
};

export default MinMaxDegree;
