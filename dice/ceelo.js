function init(num) {
  num_players = num;
  var playerScore = null;
  var turnOver = false;
  while (!playerScore && !turnOver) {
      var theRoll = roll();
      playerScore = score(theRoll); 
  }
  console.log(theRoll);
  console.log(playerScore);
}
function die() {
  return (Math.floor(Math.random()*6) + 1);
}

function roll() {
  var rolls = [die(), die(), die()];
  return rolls.sort();
}

function score(roll) {
  var success = evaluate(roll); 
  if(success){
      turnOver = true;
      return success;
  }else {
      return false;
  }
}

function evaluate(roll){
    var duplicates = [];
    var value = 0;
    if (roll === [4,5,6]){
      turnOver = true;
      return 100;
    }
    else if (roll === [1,2,3]) {
      turnOver = true;
      return -10;
    }
    else if (roll[0] === roll[1] && roll[0] === roll[2]){
        return roll[0] * 5;
    }
    else if (roll[0] === roll[1]){
        return roll[2];
    }
    else if (roll[0] === roll[2]){
        return roll[1];
    }
    else if (roll[1] === roll[2]){
        return roll[0];
    }
    else {
        return false;
    }
}
init(2);