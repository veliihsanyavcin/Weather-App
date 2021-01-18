import React from 'react';
import './PreResult.css';

const PreResult = ({ firstResult, secondResult }) => {
  return (
    <div className="PreResult">
      <div className="firstResult">
        <span>{firstResult}</span>
      </div>
      <div className="secondResult">
        <span>{secondResult}</span>
      </div>
    </div>
  );
};

export default PreResult;
