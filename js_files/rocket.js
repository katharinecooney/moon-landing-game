'use strict';

function Rocket(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 50;
  this.y = 100;
  this.size = 50;
  this.speed = 8;
  this.xDirection = 0;
  this.yDirection = 0;
  
  this.starCounter = 0;
}

// puts the rocket on the canvas
Rocket.prototype.draw = function() {
  // this.ctx.fillStyle = 'green';
  // this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);

  let img = document.createElement('img');
  img.src = '../images/start-up.png';
  this.ctx.drawImage(img, this.x, this.y, this.size, this.size);
}

// updates the rocket's x and y positions
Rocket.prototype.update = function() {
  this.y = this.y + this.yDirection * this.speed;
  this.x = this.x + this.xDirection * this.speed;
}

// we will pass a direction (up, down, left, right) and it will be saved as the rocket's new direction
Rocket.prototype.setYdirection = function(newDirection) {
  this.yDirection = newDirection;
}

Rocket.prototype.setXdirection = function(newDirection) {
  this.xDirection = newDirection;
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


