'use strict';

function Rocket(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 50;
  this.y = 100;
  this.size = 30;
  this.speed = 2;
  this.direction = 0;
  // this.yDirection = 0;
  
  this.starCounter = 0;
}

// puts the rocket on the canvas
Rocket.prototype.draw = function() {
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
}

// updates the rocket's x and y positions
Rocket.prototype.update = function() {
  this.y = this.y + this.direction * this.speed;
}

// we will pass a direction (up, down, left, right) and it will be saved as the rocket's new direction
Rocket.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
}

// will add a star to this.starCounter
Rocket.prototype.countStarsCaught = function() {
  this.starCounter++;
}

// check 'collisions' with star
Rocket.prototype.checkForStars = function() {

}

// will move the rocket to the moon
Rocket.prototype.victory = function() {

}
