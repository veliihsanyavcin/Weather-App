import React from 'react';
import './App.css';
import Day from '../components/Day/Day';


class App extends React.Component {
  constructor() {
    super()
  } 

  render() {
    return (
    <div className="App">
      <Day />
    </div>
    );
  }
}

export default App;