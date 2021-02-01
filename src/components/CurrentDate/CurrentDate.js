import React from 'react';

const CurrentDate = ({ className }) => {
  const date = new Date();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var day = days[ date.getDay() ];
  var result = day + ', ' + date.toLocaleDateString() + ' ' + '|' + ' ' + date.toLocaleTimeString();
  return (
    <div className={className}>
      {result}
    </div>
  );
}

export default CurrentDate;
