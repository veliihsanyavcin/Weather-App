import React from 'react';
import Background from '../Background/Background';
import SearchPanel from '../SearchPanel/SearchPanel';
import './Search.css';

const Search = () => {
  return (
    <div className="Search">
      <SearchPanel />
      <Background />
    </div>
  );
};

export default Search;
