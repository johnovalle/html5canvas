function LongestWord(sen) { 
  var words = sen.match(/[a-zA-Z]+/g);
  var longest = '';
  words.forEach(function(word){
    if(word.length > longest.length){
      longest = word;
    }
  });

  // code goes here  
  return longest; 
         
}