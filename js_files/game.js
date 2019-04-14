'use strict';


function Game(canvas) {
  this.rocket = null;
  this.stars = [];
  this.moon = null;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.timeRemaining = 10;
  this.gameOver = false;
}

// starts the game
Game.prototype.startLoop = function() {
  this.rocket = new Rocket(this.canvas);
  this.moon = new Moon(this.canvas);
  this.stars = [];
  
  // 'animates' the game when passed to window.requestAnimationFrame()
  let loop = () => {

    // adds a new star randomly to the canvas
    if(this.gameOver === false){
      if(Math.random() > .96) {
        let randomY = (Math.random() * this.canvas.height);
        this.stars.push(new Star(this.canvas, randomY));
      }
    }
    
    // on every frame, the canvas will be cleared, the new positions will be checked, and then the items will be drawn in their new positions

    // we will also be checking for collisions, and to see if the time has run out or the user caught enough stars
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkIfStarsCaught();
    this.checkIfWin();
    this.checkIfGameOver();
    
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
  // this.moon.update();
  this.stars.forEach(function(star){
    star.update();
  });
}

// will check if rocket caught any stars
Game.prototype.checkIfStarsCaught = function() {
  let bell = new Audio();
  bell.src = '../sound_spark_Laser-Like_Synth_Basic_Laser2_09.mp3';
  this.stars.forEach((star, index) => {
    const isColliding = this.rocket.checkForStars(star);
    if(isColliding){
      bell.play();
      this.stars.splice(index, 1);
      this.rocket.countStarsCaught();
      console.log('you caught a star!');

    }
  });
}

Game.prototype.checkIfGameOver = function() {
  if(this.timeRemaining === 0){
    // this.rocket.starCounter = 0;
    this.gameOver = true; 
    // music.pause();
    // music.currentTime = 0;
    setTimeout(this.onGameOver, 500);
  }
}

Game.prototype.checkIfWin = function() {
  if(this.rocket.starCounter === 5) {
    // this.rocket.starCounter = 0;
    this.gameOver = true; 
    // music.pause();
    // music.currentTime = 0;
    setTimeout(this.onWin, 500);
  }
}




// to access the buildGameOver function from main.js, we need to create a function in this file that can receive buildGameOver as a callback and save it by another name, which we can use in this file

// i think we can't access that function directly because game.js loads before main.js --> main js can access functions directly from game.js because game.js loads first! 

Game.prototype.callGameOverScreen = function(callback) {  
   this.onGameOver = callback;
}

Game.prototype.callWinScreen = function(callback) {  
  this.onWin = callback;
}



