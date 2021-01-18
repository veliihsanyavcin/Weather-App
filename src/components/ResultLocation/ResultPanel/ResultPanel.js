import React from 'react';
import './ResultPanel.css';
import locationIcon from '../../../assets/icons/locationIcon.png';

const ResultPanel = () => {
  return (
    <div className="ResultPanel">
      <div className="header">
        <span>Location</span>
      </div>
      <div className="search">
        <input className="searchBar" type="text" placeholder="Search" />
        {/* <img src={locationIcon} className="locationIcon" /> */}
      </div>
      <div className="textDiv">
        <span className="searchText">Sonuç</span>
        <span className="textSearch">İstanbul, Turkey</span>
        <span className="searchHeader">İ</span>
        <span className="searchDetail">İstanbul, Turkey</span>
      </div>
    </div>
  );
};

export default ResultPanel;
