import React from 'react';
import background from '../../assets/icons/background.png';
import './Background.css';

const Background = () => {
  return (
    <div className="Background">
      <img className="bg" src={background}  />
    </div>
  );
};

export default Background;
