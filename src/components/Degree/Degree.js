import React from 'react';
import './Degree.css';

const Degree = ({ degree }) => {
  return (
    <div className="Degree">
      <h1 className="degree">{degree}</h1><h2 className="
centigrade">°C</h2>
    </div>
  );
};

export default Degree;
