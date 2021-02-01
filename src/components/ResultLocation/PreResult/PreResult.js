import React, { Component, useState } from 'react';
import './PreResult.css';
import Search from '../../Search/Search'
import Day from '../../Day/Day';

class PreResult extends Component {
  state = {
    visiblity: false,
  };

  handleClick = (city) => {
    this.props.onItemSelected(city);
    this.setState({
      visiblity: !this.state.visiblity
    })
  }

  render() {
        return (
          
      <li className="PreResult">
        <div className="allResult">
         <span className="basHarf">{this.props.content.harf}</span>
         {this.props.content.cities.map(city => (
            <p className="subResult" onClick={e => this.handleClick(city)}>{city.city}, {city.country}</p>
          ))}
        </div>
      </li>
    );
  };
};

export default PreResult;



