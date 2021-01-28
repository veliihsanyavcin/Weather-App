import React from 'react';
import background from '../../assets/icons/background.png';
import './Background.css';
import nightBackground from '../../assets/icons/nightbackground.png';

const Background = ({ sunset }) => {
  
  const night = sunset > Date.now();
  return (

    <div className="Background">
      { night ? <img className="bg" src={nightBackground} /> :
        <img className="bg" src={background} />
      }
    </div>
  );
};

export default Background;
