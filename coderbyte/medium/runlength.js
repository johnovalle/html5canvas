function RunLength(str) { 
  var letters = str.split('');
  var count = 1;
  var lastLetter = '';
  var encoded = '';
  for(var i = 0; i<letters.length; i++){
    if(i === 0){
      lastLetter = letters[i];
    }
    else if(i === (letters.length - 1)){
      if(letters[i] === lastLetter){
        count += 1;
        encoded += count + lastLetter;
      }
      else{
        encoded += count + lastLetter;
        count = 1;
        lastLetter = letters[i];
        encoded += count + lastLetter;
      }
      
    }
    else if(letters[i] === lastLetter){
      count += 1;
      
    }
    else{
     encoded += count + lastLetter;
     count = 1;
     lastLetter = letters[i];
    }
  }
  // code goes here  
  return encoded; 
         
}