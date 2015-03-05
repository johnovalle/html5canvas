"use strict";

var Game = {
  canvas: undefined,
  canvasContext: undefined,
  backgroundSprite: undefined,
  cannonBarrelSprite: undefined,
  mousePosition: { x: 0, y: 0 },
  cannonPosition: { x: 72, y: 405 },
  cannonOrigin: { x: 34, y: 34 },
  cannonRotation: 0  
};

Game.start = function () {
  Game.canvas = document.getElementById("myCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.backgroundSprite = new Image();
  Game.backgroundSprite.src = "spr_background.jpg";
  Game.cannonBarrelSprite = new Image();
  Game.cannonBarrelSprite.src = "spr_cannon_barrel.png";
  window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener('DOMContentLoaded', Game.start);

Game.update = function (){
  var opposite = Game.mousePosition.y - Game.cannonPosition.y;
  var adjacent = Game.mousePosition.x - Game.cannonPosition.x;
  Game.cannonRotation = Math.atan2(opposite, adjacent);
};

Game.draw = function () {
  Game.clearCanvas();
  
  Game.drawImage(Game.backgroundSprite, { x: 0, y: 0 }, 0, { x: 0, y: 0});
  // Game.balloonOrigin = { x : Game.balloonSprite.width / 2,
  //                        y : Game.balloonSprite.height };
  // doesn't work as it should 
  // This should be in a call back
  Game.drawImage(Game.cannonBarrelSprite, Game.cannonPosition,
        Game.cannonRotation, Game.cannonOrigin);
};
Game.drawImage = function (sprite, position, rotation, origin) {
  Game.canvasContext.save();
  Game.canvasContext.translate(position.x, position.y);
  Game.canvasContext.rotate(rotation);
  Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
                                -origin.x, -origin.y, sprite.width, sprite.height);
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
  
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};