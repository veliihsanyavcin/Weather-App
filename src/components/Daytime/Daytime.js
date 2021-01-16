import React from 'react';
import daytimeIcon from '../../assets/icons/daytime.png';
import './Daytime.css';

const Daytime = ({ dayTime }) => {
  return (
    <div className="Daytime">
      <img src={daytimeIcon} />
      <h1 className="dayTimeData">{dayTime}</h1>
      <span className="dayTimeText">Daytime</span>
    </div>
  );
};

export default Daytime;
