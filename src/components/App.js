import React from 'react';
import './App.css';
import Day from '../components/DayWeatherForecast/Day/Day';
import Night from '../components/NightWeatherForecast/Night/Night';
import Search from '../components/SearchLocation/Search/Search';
import Result from './ResultLocation/Result/Result';


const App = () => {
  return (
    <div className="App">
      <Day />
      <Night />
      <Search />
      <Result />
    </div>

  );
};

export default App;