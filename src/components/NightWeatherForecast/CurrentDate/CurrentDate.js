import React from 'react';

const CurrentDate = ({ className }) => {
  const date = new Date();

  return (
    <div className={className}>
      {date.toLocaleString()}
    </div>
  );
};

export default CurrentDate;
