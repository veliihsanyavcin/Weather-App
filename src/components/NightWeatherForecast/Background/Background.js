import React from 'react';
import './Background.css';
import nightBackground from '../../../assets/icons/nightbackground.png';

const Background = () => {
  return (
    <div className="Background">
    <img className="bg" src={nightBackground}  />
  </div>
  );
};

export default Background;
