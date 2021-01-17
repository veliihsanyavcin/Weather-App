import React from 'react';
import './Degree.css';

const Degree = ({ degree }) => {
  return (
    <div className="Degree">
    <span className="temperature">{degree}</span>
    <span className="
centigrade">°C</span>
  </div>
  );
};

export default Degree;