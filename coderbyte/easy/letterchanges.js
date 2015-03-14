function LetterChanges(str) { 
  var letters = str.split('');
  console.log(letters);
  for(var i = 0; i<letters.length; i++){
      //console.log(/[a-zA-Z]/.test(letters[i]));
    if(letters[i].match(/[a-zA-Z]/)){
      letters[i] = letters[i].charCodeAt() + 1;
        letters[i] = String.fromCharCode(letters[i]);
        if(letters[i].match(/[aeiou]/)){
            letters[i] = letters[i].toUpperCase();
        }
    }
  }
  // code goes here
  console.log(letters);
  str = letters.join('');
  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());   