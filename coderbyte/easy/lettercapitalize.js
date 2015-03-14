function LetterCapitalize(str) {
  var letters = str.split('');
  var space = true;
  for (var i = 0; i<letters.length; i++){
    if(letters[i] === ' '){
      space = true;
    }
    else{
      if(space === true){
        letters[i] = letters[i].toUpperCase();
      }
      space = false;
    }
  }
  str = letters.join('');
  // code goes here  
  return str; 
         
}