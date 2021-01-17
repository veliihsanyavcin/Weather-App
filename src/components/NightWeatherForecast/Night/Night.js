import React from 'react';
import './Night.css';
import '../Background/Background';
import Prediction from '../Prediction/Prediction';
import Background from '../Background/Background';

const Night = () => {
  return (
    <div className="Night">
      <Background />
      <Prediction />
    </div>
  );
};

export default Night;
