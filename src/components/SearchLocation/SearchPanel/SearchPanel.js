import React from 'react';
import './SearchPanel.css'

const SearchPanel = () => {
  return (
    <div className="SearchPanel">
      <div className="header">
        <span>Location</span>
      </div>
      <input className="searchBar" type="text" placeholder="Search" />
      <div className="textDiv">
        <span className="searchText">Lütfen arama yapmak için en az 3 harf girin.</span>
      </div>

    </div>
  );
};

export default SearchPanel;
