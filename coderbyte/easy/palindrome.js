function Palindrome(str) { 
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  // code goes here  
  return str === str.split('').reverse().join(''); 
         
}