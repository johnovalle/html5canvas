"use strict";

var sprites = {};

var Canvas2D = {
  canvas: undefined,
  canvasContext: undefined
};

var Game = {
  backgroundSprite: undefined
};

var cannon = {
  cannonBarrelSprite: undefined,
  cannonPosition: { x: 72, y: 405 },
  cannonOrigin: { x: 34, y: 34 },
  cannonRotation: 0 
};

var Mouse = {
  mousePosition: { x: 0, y: 0 }
};
function handleMouseMove(evt) {
  Game.mousePosition = { x : evt.pageX, y : evt.pageY };
}
var Keyboard = { keyBown: -1}; 
function handleKeyDown(evt) {
  Keyboard.keyDown = evt.keyCode;
};
function handleKeyUp(evt) {
  Keyboard.keyDown = -1;
};
document.onkeyup = handleKeyUp;
Game.start = function () {
  // Game.canvas = document.getElementById("myCanvas");
  // Game.canvasContext = Game.canvas.getContext("2d");
  // Game.backgroundSprite = new Image();
  // Game.backgroundSprite.src = "spr_background.jpg";
  // Game.cannonBarrelSprite = new Image();
  // Game.cannonBarrelSprite.src = "spr_cannon_barrel.png";
  // window.setTimeout(Game.mainLoop, 500);
  var spriteFolder = "/assets/sprites/";
  sprites.background = new Image();
  sprites.background.src = spriteFolder + "spr_background.jpg"
  sprites.cannon_barrel = new Image();
  sprites.cannon_barrel.src = spriteFolder + "spr_cannon_barrel.png";
  sprites.cannon_red = new Image();
  sprites.cannon_red.src = spriteFolder + "spr_cannon_red.png";
  sprites.cannon_green = new Image();
  sprites.cannon_green.src = spriteFolder + "spr_cannon_green.png";
  sprites.cannon_blue = new Image();
  sprites.cannon_blue.src = spriteFolder + "spr_cannon_blue.png";
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
Canvas2D.drawImage = function (sprite, position, rotation, origin) {
  Game.canvasContext.save();
  Game.canvasContext.translate(position.x, position.y);
  Game.canvasContext.rotate(rotation);
  Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
                                -origin.x, -origin.y, sprite.width, sprite.height);
  Game.canvasContext.restore();
};
Canvas2D.clear = function () {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};


document.onmousemove = handleMouseMove;
Game.mainLoop = function () {
  
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};