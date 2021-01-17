import React from 'react';
import './ResultPanel.css';

const ResultPanel = () => {
  return (
    <div className="ResultPanel">
      <div className="header">
        <span>Location</span>
      </div>
      <input className="searchBar" type="text" placeholder="Search" />
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
