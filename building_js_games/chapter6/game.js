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

cannon.initialize = function() {
  cannon.position = { x : 72, y : 405 };
  cannon.colorPosition = { x : 55, y : 388 };
  cannon.origin = { x : 34, y : 34 };
  cannon.currentColor = sprites.cannon_red;
  cannon.rotation = 0;
};

cannon.draw = function () {
  Canvas2D.drawImage(sprites.cannon_barrel, cannon.position, cannon.rotation,
  cannon.origin);
  Canvas2D.drawImage(cannon.currentColor, cannon.colorPosition, 0,
  { x : 0, y : 0 });
};

Game.draw = function () {
  Canvas2D.clear();
  Canvas2D.drawImage(sprites.background, { x : 0, y : 0 }, 0,
  { x : 0, y : 0 });
  cannon.draw();
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

Game.start = function () {
  Canvas2D.initialize("myCanvas");
  document.onkeydown = handleKeyDown;
  document.onkeyup = handleKeyUp;
  document.onmousemove = handleMouseMove;
  cannon.initialize();
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