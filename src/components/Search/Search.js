import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PreResult from '../ResultLocation/PreResult/PreResult';
import Data from './Data';
import './Search.css';
import placeIcon from '../../assets/icons/locationIcon.png';
class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      items: Data.items,
      searchResults: []
    };
  };

  inputHandler(e) {
    var updatedList = this.state.items;

    updatedList = updatedList.filter(function (item) {
      return item.cityName.toLowerCase().search(e.target.value.toLowerCase()) > -1;
    });

    this.setState({
      searchResults: updatedList,
      inputValue: e.target.value
    });
  };

  render() {
    const items = this.state.searchResults.map((item) => {
      return <PreResult content={item} searchTerm={this.state.inputValue} />;
    });

    return (
      <div className="SearchPanel">
        <div className="searchHeader">
          <span>Location</span>
        </div>
        <div className="inputGroup">
          <input value={this.state.inputValue} onChange={(e) => this.inputHandler(e)} className="searchBar" type="text" placeholder="Search" />
          <img className="placeIcon" src={placeIcon} />
        </div>
        <div className="textDiv">
          <span className="searchText">{this.state.inputValue.length > 2 ? items : "Please enter at least 3 letters to make  a search."}</span>
        </div>
      </div>
    );
  };
};

export default Search;
