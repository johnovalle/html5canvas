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
  Game.balloonPosition.x = (d.getTime() / 4) % Game.canvas.width;
  Game.balloonPosition2.x = (d.getTime() / 2) % Game.canvas.width;
  Game.balloonPosition3.x = (d.getTime() / 8) % Game.canvas.width;
};

Game.draw = function () {
  
  //Game.canvasContext.fillStyle = "blue";
  //Game.canvasContext.fillRect(0, 0, Game.canvas.width, Game.canvas.height);
  //Game.canvasContext.fillRect(Game.rectanglePosition, Game.rectanglePosition, 50, 50);
  Game.drawImage(Game.backgroundSprite, { x: 0, y: 0 });
  Game.drawImage(Game.ballonSprite, Game.balloonPosition);
  Game.drawImage(Game.ballonSprite, Game.balloonPosition2);
  Game.drawImage(Game.ballonSprite, Game.balloonPosition3);
  Game.drawImage(Game.ballonSprite, { x: 300, y: 100 });
  Game.drawImage(Game.ballonSprite, { x: 400, y: 200 });
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

Game.mainLoop = function () {
  Game.clearCanvas();
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};