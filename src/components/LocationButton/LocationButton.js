import React from 'react';
import locationIcon from '../../assets/icons/location.png';
import './LocationButton.css';

const LocationButton = ({ city, onClick}) => {
  return (
    <div onClick={onClick} className="LocationButton">
      <span>{city}</span>
      <img className="locationIcon" src={locationIcon} />
    </div>
  );
};

export default LocationButton;
