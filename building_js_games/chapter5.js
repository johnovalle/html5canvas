"use strict";

var Game = {
  canvas: undefined,
  canvasContext: undefined,
  //rectanglePosition: 0,
  backgroundSprite: undefined,
  ballonSprite: undefined,
  balloonPosition: { x: 0, y: 50 },
  balloonPosition2: { x: 0, y: 250 },
  balloonPosition3: { x: 0, y: 450 },
  backgroundMusic: undefined
};

Game.start = function () {
  Game.canvas = document.getElementById("myCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.ballonSprite = new Image();
  Game.ballonSprite.src = "spr_balloon.png";
  Game.backgroundSprite = new Image();
  Game.backgroundSprite.src = "spr_background.jpg";
  Game.backgroundMusic = new Audio();
  Game.backgroundMusic.src = "snd_music.mp3";
  Game.backgroundMusic.play();
  Game.backgroundMusic.volume = 0.4;
  window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener('DOMContentLoaded', Game.start);

Game.update = function (){
  var d = new Date();
};

Game.draw = function () {
  
  
  Game.drawImage(Game.backgroundSprite, { x: 0, y: 0 });
  Game.drawImage(Game.ballonSprite, Game.balloonPosition);
};
Game.drawImage = function (sprite, position) {
  Game.canvasContext.save();
  Game.canvasContext.translate(position.x, position.y);
  Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
                                0, 0, sprite.width, sprite.height);
  Game.canvasContext.restore();
};
Game.clearCanvas = function () {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

function handleMouseMove(evt) {
  Game.balloonPosition = { x : evt.pageX, y : evt.pageY };
}
document.onmousemove = handleMouseMove;
Game.mainLoop = function () {
  Game.clearCanvas();
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};