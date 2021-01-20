import React from 'react';
import './Day.css';
import Forecast from '../Forecast/Forecast';
import Background from '../Background/Background';

const Day = () => {
  return (
    <div className="Day">
      <Background night={true} />
      <Forecast /> 
    </div>
  );
};

export default Day;