function SimpleSymbols(str) { 
  //var correct = /\+[a-zA-Z]\+/.test(str);
  var letters = str.split('');
  
  if(/[a-zA-Z]/.test(letters[0]) || /[a-zA-Z]/.test(letters[letters.length-1])){
    return false;
  }
  for(var i = 0; i<letters.length; i++){
    if (/[a-zA-Z]/.test(letters[i])){
      if(letters[i-1] === '+' && letters[i+1] === '+'){
        return true;
      }
      else{
        return false;
      }
    }
  }
 
  return true; 
         
}