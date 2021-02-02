import React from 'react';
import DayMinMax from '../DayMinMax/DayMinMax';
import WeatherDetailBlock from '../WeatherDetailBlock/WeatherDetailBlock';
import './Slidebar.css';
import cloudsIcon from '../../assets/icons/daycloudy.png';
import clearIcon from '../../assets/icons/d-clear.png';
import atmosphereIcon from '../../assets/icons/d-atmosphere.png';
import drizzleIcon from '../../assets/icons/d-drizzle.png';
import rainIcon from '../../assets/icons/d-rain.png';
import snowIcon from '../../assets/icons/d-snow.png';
import thunderstormIcon from '../../assets/icons/d-thunderstorm.png';

// Günler için gün bilgisini alınması
const getDay = (dayto) => {

  var date = new Date(dayto * 1000);
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = days[date.getDay()]
  return dayOfWeek;
};

// Günler için temp to degree
const toCelsius = (temp) => {
  const cell = Math.floor(temp - 273.15);
  return cell;
}

// Günler içic iconların alınması
const getWeatherIcon = (rangeId) => {
  switch (true) {
    // Thunderstorm
    case rangeId >= 200 && rangeId < 300:
      return thunderstormIcon;
    // Drizzle  
    case rangeId >= 300 && rangeId < 400:
      return drizzleIcon;
    // Rainy
    case rangeId >= 500 && rangeId < 600:
      return rainIcon
    // Snow  
    case rangeId >= 600 && rangeId <= 622:
      return snowIcon;
    // Atmosphere  
    case rangeId >= 701 && rangeId <= 781:
      return atmosphereIcon;
    // Clear  
    case rangeId === 800:
      return clearIcon
    // Clouds  
    case rangeId >= 801 && rangeId <= 804:
      return cloudsIcon;
    default:
      return cloudsIcon;
  };
};

const Slidebar = (props) => {
  if (props.daily) {
    let arr = Object.keys(props.daily).map((k) => props.daily[k]);
    return (
      <div className="Slidebar">
        <div className="slidebar-scroll">
          {arr.map(item => <WeatherDetailBlock icon={getWeatherIcon(item.weather["0"].id)} value={`${getDay(item.dt)}, ${toCelsius(item.temp.max)}°`} label={<DayMinMax minDegree={`${toCelsius(item.temp.min)}°C`} maxDegree={`${toCelsius(item.temp.max)}°C`} />} hasShadow />)}
        </div>
      </div>
    );
  } else {
    return (<p>Veri Yükleniyor..</p>)
  }
};

export default Slidebar;
