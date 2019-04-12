'use strict';

function Rocket(canvas) {
  this.x = x;
  this.y = y;
  this.size = 75;
  this.speed = 0;
  this.direction = 0;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.starCounter = 0;
}

// puts the rocket on the canvas
Rocket.prototype.draw = function() {

}

// updates the rocket's x and y positions
Rocket.prototype.update = function() {

}

// we will pass a direction (up, down, left, right) and it will be saved as the rocket's new direction
Rocket.prototype.setDirection = function() {

}

// will add a star to this.starCounter
Rocket.prototype.countStarsCaught = function() {

}

// check 'collisions' with star
Rocket.prototype.checkForStars() = function() {

}

// will move the rocket to the moon
Rocket.prototype.victory() = function() {

}