import React from 'react';
import NightMinMax from '../NightMinMax/NightMinMax';
import WeatherDetailBlock from '../WeatherDetailBlock/WeatherDetailBlock';
import './Slidebar.css';
import daysunnyIcon from '../../../assets/icons/daysunny.png';
import daycloudyIcon from '../../../assets/icons/daycloudy.png';
import dayhazyIcon from '../../../assets/icons/dayhazy.png';

const Slidebar = () => {
  return (
    <div className="Slidebar">
      <WeatherDetailBlock icon={daysunnyIcon} value="Mon, 21" label={<NightMinMax minDegree="35" maxDegree="26" />} hasShadow />
      <WeatherDetailBlock icon={daycloudyIcon} value="Tue, 22" label={<NightMinMax minDegree="35" maxDegree="27" />} hasShadow />
      <WeatherDetailBlock icon={dayhazyIcon} value="Wed, 23" label={<NightMinMax minDegree="34" maxDegree="29" />} hasShadow />
      <WeatherDetailBlock icon={dayhazyIcon} value="Thu, 24" label={<NightMinMax minDegree="33" maxDegree="27" />} hasShadow />
    </div>
  )
}

export default Slidebar;

