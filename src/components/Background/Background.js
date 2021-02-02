import React from 'react';
import background from '../../assets/icons/background.png';
import './Background.css';
import nightBackground from '../../assets/icons/nightbackground.png';

const Background = ({ sunset }) => {
  
  // Sunset'e göre arka plan değişimi
  const night = sunset > Date.now();
  return (

    <div className="Background">
      { night ? <img className="bg" src={nightBackground} alt="description" /> :
        <img className="bg" src={background} alt="description" />
      }
    </div>
  );
};

export default Background;
