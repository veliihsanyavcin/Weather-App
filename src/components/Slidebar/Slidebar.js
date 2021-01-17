import React from 'react';
import daysunnyIcon from '../../assets/icons/daysunny.png';
import DayMinMax from '../DayMinMax/DayMinMax';
import WeatherDetailBlock from '../WeatherDetailBlock/WeatherDetailBlock';
import './Slidebar.css';

const Slidebar = () => {
  return (
    <div className="Slidebar">
      <WeatherDetailBlock icon={daysunnyIcon} value="Mon, 21" label={<DayMinMax minDegree="21" maxDegree="23" />} hasShadow />
      <WeatherDetailBlock icon={daysunnyIcon} value="Tue, 22" label={<DayMinMax minDegree="21" maxDegree="23" />} hasShadow />
      <WeatherDetailBlock icon={daysunnyIcon} value="Wed, 23" label={<DayMinMax minDegree="21" maxDegree="23" />} hasShadow />
      <WeatherDetailBlock icon={daysunnyIcon} value="Thu, 24" label={<DayMinMax minDegree="21" maxDegree="23" />} hasShadow />
    </div>
  )
}

export default Slidebar;
