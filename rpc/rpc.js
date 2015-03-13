// var game = {
//   player1: null,
//   computer: null,
//   action: function(player){
//     console.log("choose your weapon!");
    
//   },
//   compare: function(player1, player2)
// }

var player1 = null;
var computer = null;
var gameWon = false;
var moves = ["rock", "paper", "scissors"];
var setPlayer = function(player, player_choice){
  player = player_chioce;
  console.log("choose you chose " + player);
};
var compare = function(player, computer){
  if(player === computer){
    console.log("tie play again");
    player1 = null;
    computer = null;
  }
  else if((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")){
     console.log("You won");
     gameWon = true;
     player1 = null;
     computer = null;
  }
  else{
    console.log("You lost");
    gameWon = true;
    player1 = null;
    computer = null;
  }
};

