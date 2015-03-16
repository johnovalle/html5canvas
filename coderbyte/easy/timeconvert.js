function TimeConvert(num) { 
  
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  var time = hours + ":" + minutes;
  return time; 
         
}