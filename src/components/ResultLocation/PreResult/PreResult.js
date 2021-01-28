import React, { Component, useState } from 'react';
import './PreResult.css';
import Search from '../../Search/Search'
import Day from '../../Day/Day';



class PreResult extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      visiblity: false,
    };
  };

  handleToggle() {
    this.setState((prevState) => {
      return {
        visiblity: !prevState.visiblity,
      };
    });
  };

  render() {
   
    return (
      <ul className="PreResult" onClick={this.handleToggle}>
        <div className="firstResult">
          <span>{this.props.content.city},{this.props.content.country}</span>
        </div>
        <div className="secondResult">

        </div>
        <div className="allTesult">
        </div>
      </ul>
    );
  };
};

export default PreResult;



