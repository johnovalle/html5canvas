function ExOh(str) {
  var exs = str.match(/x/g) || 0;
  var ohs = str.match(/o/g) || 0;

  // code goes here  
  return exs.length === ohs.length; 
         
}