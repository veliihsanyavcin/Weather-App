import React from 'react';

const CurrentDate = ({ className }) => {
  const date = new Date();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var day = days[ date.getDay() ];
  var hour = date.getHours();
  var min = date.getMinutes();
  var result = day + ', ' + date.toLocaleDateString() + ' ' + '|' + ' ' + date.toLocaleTimeString();
  console.log(date);
  return (
    <div className={className}>
      {result}
    </div>
  );
}

export default CurrentDate;
