import React from 'react';
import './App.css';
import Day from '../components/Day/Day';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

class App extends React.Component {
  
  render() {
    return (
    <div className="App">
      <Day />
    </div>
    );
  }
}

export default App;