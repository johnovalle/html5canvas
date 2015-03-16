function VowelCount(str) { 
  
  var matches = str.match(/[aeiouAEIOU]/g);
  var count = matches.length || 0;
  // code goes here  
  return count; 
         
}