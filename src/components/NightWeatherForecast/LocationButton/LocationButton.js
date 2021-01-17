import React from 'react';
import './LocationButton.css'
import locationIcon from '../../../assets/icons/location.png';


const LocationButton = ({ city, onClick }) => {
  return (
    <div onClick={onClick} className="LocationButton">
      <span>{city}</span>
      <img className="locationIcon" src={locationIcon} />
    </div>
  );
};

export default LocationButton;
