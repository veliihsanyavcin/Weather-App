import React from 'react';
import locationIcon from '../../assets/icons/licon.svg';
import './LocationButton.css';

const LocationButton = ({ city, onClick}) => {
  return (
    <div onClick={onClick} className="LocationButton">
      <span className="cityName">{city}</span>
      <img className="locationIcon" src={locationIcon} />
    </div>
  );
};

export default LocationButton;
