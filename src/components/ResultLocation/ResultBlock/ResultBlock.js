import React from 'react';
import ResultDetail from '../ResultDetail/ResultDetail';
import ResutHeader from '../ResultHeader/ResutHeader';
import './ResultBlock.css';

const ResultBlock = ({ header, detail }) => {
  return (
    <div className="ResultBlock">
      <ResutHeader>{header}</ResutHeader>
      <ResultDetail>{detail}</ResultDetail>
    </div>
  );
};

export default ResultBlock;
