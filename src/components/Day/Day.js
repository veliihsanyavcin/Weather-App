import React from 'react';
import './Day.css';
import CurrentDate from '../CurrentDate/CurrentDate';
import Forecast from '../Forecast/Forecast';
import Weather from '../Weather/Weather';


const Day = () => {
  return (
    <div className="Day">

      <Forecast />

      {/* <LocatıonButton cıty="Istanbul" onClıck={ } /> */}

      {/* <Background /> */}

    </div>
  );
};

export default Day;