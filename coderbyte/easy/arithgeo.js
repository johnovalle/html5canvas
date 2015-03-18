function ArithGeo(arr) {
  var last_sub;
  var last_divide;
  for(var i = 1; i<arr.length; i++){
    if(i === 1){
      last_sub = arr[i-1] - arr[i];
    }
    else if(i === arr.length-1){
      if(last_sub === arr[i-1] - arr[i]){
        return "Arithmetic";
      }
      else{
        break;
      }
    }
    else{
      if(last_sub === arr[i-1] - arr[i]){
         continue;
        }
        else{
          break;
        }
    }
    
  }
  for(var j = 1; j<arr.length; j++){
    console.log(j);
    if(j === 1){
      last_divide = arr[j] / arr[j-1];
      console.log(last_divide);
    }
    else if(j === arr.length-1){
        console.log(arr[j] / arr[j-1]);
        console.log(last_divide === arr[j] / arr[j-1]);
      if(last_divide === arr[j] / arr[j-1]){
        return "Geometric";
      }
      else{
        break;
      }
    }
    //else statement here was causing errors 
    //but not having it here also causes an error 
    //when the last two elements match pattern but not rest of the array
    
  }
  return -1; 
         
}