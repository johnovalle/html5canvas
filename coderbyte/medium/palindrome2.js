function PalindromeTwo(str) { 
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // code goes here  
  return str === str.split('').reverse().join(''); 
         
}