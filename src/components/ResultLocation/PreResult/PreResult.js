import React from 'react';
import './PreResult.css';
import Search from '../../Search/Search'

const PreResult = ({ content }) => {
  return (
    <li className="PreResult">
      <div className="firstResult">
        <span>{content.city}</span>
      </div>
    
      <br />
    </li>
  );
};

export default PreResult;
