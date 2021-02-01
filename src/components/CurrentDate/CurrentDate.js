import React from 'react';

const CurrentDate = ({ className }) => {
  const date = new Date();
  const a = date.toLocaleDateString('en-US', {
    weekday:'long',
    day : 'numeric', 
    month : 'short',
    year : 'numeric',
  }) +' | '+
  date.toLocaleString("en-US", {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit'});
    console.log(a);
  // var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  // var months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  // var day = days[ date.getDay() ];
  // var mounts = months[date.getMonth() ];
  // console.log(mounts);  
  var result = a;
  return (
    <div className={className}>
      {result}
    </div>
  );
}

export default CurrentDate;
