'use strict';

function Game(canvas) {
  this.rocket = rocket;
  this.stars = stars;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.countDown = 60;
}

// starts the game
Game.prototype.startLoop = function() {

}

// places the rocket and each star on the canvas
Game.prototype.drawCanvas = function() {

}


// removes everything from the canvas
Game.prototype.clearCanvas = function() {

}


// will call the update function for both the rocket and the stars
Game.prototype.updateCanvas = function() {

}


// will check if rocket caught any stars
Game.prototype.checkIfStarsCaught = function() {

}