import React from 'react';
import daysunnyIcon from '../../assets/icons/daysunny.png';
import DayMinMax from '../DayMinMax/DayMinMax';
import WeatherDetailBlock from '../WeatherDetailBlock/WeatherDetailBlock';
import './Slidebar.css';
import daycloudyIcon from '../../assets/icons/daycloudy.png';
import dayhazyIcon from '../../assets/icons/dayhazy.png';

const Slidebar = () => {
  return (
    <div className="Slidebar">
      <div className="slidebar-scroll">
        <WeatherDetailBlock icon={daysunnyIcon} value="Mon, 21" label={<DayMinMax minDegree="35" maxDegree="26" />} hasShadow />
        <WeatherDetailBlock icon={daycloudyIcon} value="Tue, 22" label={<DayMinMax minDegree="35" maxDegree="27" />} hasShadow />
        <WeatherDetailBlock icon={dayhazyIcon} value="Wed, 23" label={<DayMinMax minDegree="34" maxDegree="29" />} hasShadow />
        <WeatherDetailBlock icon={dayhazyIcon} value="Thu, 24" label={<DayMinMax minDegree="33" maxDegree="27" />} hasShadow />
        <WeatherDetailBlock icon={daycloudyIcon} value="Tue, 22" label={<DayMinMax minDegree="35" maxDegree="27" />} hasShadow />
        <WeatherDetailBlock icon={dayhazyIcon} value="Wed, 23" label={<DayMinMax minDegree="34" maxDegree="29" />} hasShadow />
        <WeatherDetailBlock icon={dayhazyIcon} value="Thu, 24" label={<DayMinMax minDegree="33" maxDegree="27" />} hasShadow />
        
      </div>
    </div>
  )
}

export default Slidebar;
