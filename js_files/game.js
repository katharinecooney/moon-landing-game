'use strict';

// let counter = 0;

function Game(canvas) {
  this.rocket = null;
  this.stars = [];
  this.moon = null;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.timeRemaining = 5;
  this.gameOver = false;
}


// starts the game
Game.prototype.startLoop = function() {
  this.rocket = new Rocket(this.canvas);
  this.moon = new Moon(this.canvas);
  this.stars = [];
  
  // 'animates' the game
  let loop = () => {
    
    // adds a new star randomly to the canvas
    if(Math.random() > .96) {
      let randomY = (Math.random() * this.canvas.height);
      this.stars.push(new Star(this.canvas, randomY));
    }
  
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkIfStarsCaught();
    
    // updates the starCounter on the screen
    const starCounter = document.getElementById('star-counter');
    starCounter.innerHTML = this.rocket.starCounter;
   
    // continues the loop
    window.requestAnimationFrame(loop);
  }

  // starts the loop
  window.requestAnimationFrame(loop); 
}

// places the rocket and each star on the canvas
Game.prototype.drawCanvas = function() {
  this.rocket.draw();
  this.moon.draw();
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
  // this.moon.draw();
  this.stars.forEach(function(star){
    star.update();
  });
}


// will check if rocket caught any stars
Game.prototype.checkIfStarsCaught = function() {
  this.stars.forEach((star, index) => {
    const isColliding = this.rocket.checkForStars(star);
    if(isColliding){
      this.stars.splice(index, 1);
      this.rocket.countStarsCaught();
      console.log('you caught a star!');
      

      //***********TIMErEMAINING IS NOT WORKING **************//
      if((this.rocket.starCounter === 3) || (this.timeRemaining === 0)) {
        this.onGameOver();
        this.gameOver = true;
        // setTimeout(this.onGameOver, 500);
      }
    }
  });
}


// to access the buildGameOver function from main.js, we need to create a function in this file that can receive buildGameOver as a callback and save it by another name, which we can use in this file

// i think we can't access that function directly because game.js loads before main.js --> main js can access functions directly from game.js because game.js loads first! 


Game.prototype.callGameOverScreen = function(callback) {  
   this.onGameOver = callback;
}



