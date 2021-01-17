import React from 'react';
import Day from '../components/DayWeatherForecast/Day/Day';
import Night from './NightWeatherForecast/Night/Night';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Day />
      <Night />
    </div>

  );
};

export default App;