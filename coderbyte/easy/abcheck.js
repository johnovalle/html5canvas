function ABCheck(str) { 
  var letters = str.split('');
  var spaces = 0;
  var seen_a = false;
  for(var i = 0; i<letters.length; i++){
    if(letters[i] === 'a'){
      seen_a = true;
      spaces = 0;
    }
    if(letters[i] === 'b' && spaces === 3){
     return true;
    }
    if(letters[i] !== 'a' && seen_a === true){
      spaces += 1;
    }
  }
  // code goes here  
  return false; 
         
}