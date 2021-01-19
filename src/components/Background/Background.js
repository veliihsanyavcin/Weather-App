import React from 'react';
import background from '../../assets/icons/background.png';
import './Background.css';
import nightBackground from '../../assets/icons/nightbackground.png';

const Background = ({ sunset }) => {

  const date = new Date();
  const night = { sunset } > date.toLocaleString();

  return (

    <div className="Background">
      { night ? <img className="bg" src={background} /> :
        <img className="bg" src={nightBackground} />
      }
    </div>
  );
};

export default Background;
