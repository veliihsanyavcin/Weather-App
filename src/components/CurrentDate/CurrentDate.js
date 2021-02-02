import React from 'react';

const CurrentDate = ({ className }) => {
  
  // Time formatı(Monday, 01 Feb 2021 10.00 AM)
  const date = new Date();
  const dayTime = date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }) + ' | ' +
    date.toLocaleString("en-US", {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit'
    });
  return (
    <div className={className}>
      {dayTime}
    </div>
  );
}

export default CurrentDate;
