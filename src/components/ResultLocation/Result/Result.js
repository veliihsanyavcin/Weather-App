import React from 'react';
import Background from '../Background/Background';
import ResultPanel from '../ResultPanel/ResultPanel';
import './Result.css';

const Result = () => {
  return (
    <div className="Result">
      <ResultPanel />
      <Background />
    </div>
  );
};

export default Result;
