import React, { Component, useState } from 'react';
import './PreResult.css';
import Search from '../../Search/Search'
import Day from '../../Day/Day';

class PreResult extends Component {
  state = {
    visiblity: false,
  };

  handleClick = (e) => {
    this.props.onItemSelected(this.props.content);
    this.setState({
      visiblity: !this.state.visiblity
    })
  }

  render() {
    return (
      <li className="PreResult" onClick={this.handleClick}>
        <div className="firstResult">
          {/* <span>{this.props.content.city}, {this.props.content.country}</span> */}
          {/* {console.log(this.state.shortedList.record["0"].city)} */}
         <h2>{this.props.content.harf}</h2>
         {this.props.content.cities.map(city=>{
       return(<p>{city.city}</p>);
     })}
        </div>
        {/* <div className="secondResult">

        </div>
        <div className="allTesult">
        </div> */}
      </li>
    );
  };
};

export default PreResult;



