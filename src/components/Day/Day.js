import React from 'react';
import './Day.css';
import CurrentDate from '../CurrentDate/CurrentDate';
import Forecast from '../Forecast/Forecast';
import Weather from '../Weather/Weather';
import Background from '../Background/Background';

const Day = () => {
  return (
    <div className="Day">
      
     
      <Forecast />
      <Background />
      {/* <LocatıonButton cıty="Istanbul" onClıck={ } /> */}

      {/* <Background /> */}

    </div>
  );
};

export default Day;