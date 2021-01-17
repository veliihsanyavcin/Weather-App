import React from 'react';
import './NightMinMax.css';
import downVector from '../../../assets/icons/DownVector.png';
import upVector from '../../../assets/icons/UpVector.png';



const NightMinMax = ({ maxDegree, minDegree}) => {
  return (
    <div className="NightMinMax">
      <span>{maxDegree} <img src={upVector} /></span>
      <span>{minDegree} <img src={downVector} /></span>
</div>
  );
};

export default NightMinMax;
