function PrimeMover(num) { 
  var primes = [2,3];
  var currentNumber = 3;
  var prime = true;
  while (primes.length < num){
    currentNumber += 1;
    //not optimized 4 was being a problem... why?
    for(var i = 2; i<currentNumber; i++){
      if(currentNumber % i === 0){
        prime = false;
        break;
      }
    }
    if(prime){
      primes.push(currentNumber);
    }
    prime = true;
  }
  // code goes here  
  return primes[num-1]; 
         
}