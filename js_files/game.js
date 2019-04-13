'use strict';

function Game(canvas) {
  this.rocket = null;
  this.stars = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  // this.countDown = 60;
  this.gameOver = false;
}


// starts the game
Game.prototype.startLoop = function() {
  this.rocket = new Rocket(this.canvas);
  this.stars = [];

  let loop = () => {
    if(Math.random() > .90) {
      let randomY = (Math.random() * this.canvas.height);
      this.stars.push(new Star(this.canvas, randomY));
    }

    console.log('hola! i am stuck in a loop!');

    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkIfStarsCaught();
   
    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop); 
}

// places the rocket and each star on the canvas
Game.prototype.drawCanvas = function() {
  this.rocket.draw();
  this.stars.forEach(function(star){
    star.draw();
  });
}


// removes everything from the canvas
Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


// will call the update function for both the rocket and the stars
Game.prototype.updateCanvas = function() {
  this.rocket.update();
  this.stars.forEach(function(star){
    star.update();
  });
}


// will check if rocket caught any stars
Game.prototype.checkIfStarsCaught = function() {
  console.log('looking for stars');
}

Game.prototype.gameOverCallback = function() {

}