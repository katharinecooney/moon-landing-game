# Moon Landing

## Description
Moon Landing is a game where the objective is to move the rocket so that it can catch 30 stars in 30 seconds. If the player can complete the challenge, the rocket can land on the moon.


## MVP (DOM - CANVAS)
CANVAS. The mvp is a game where the player can move the rocket vertically and horizontally.


## Backlog
- Multiple levels
- Obstacles

## Data structure


### game.js

``` javascript
function Game(canvas) {
  this.rocket;
  this.stars;
  this.canvas;
  this.ctx;
  this.countDown;
  this.gameOver;
}

Game.prototype.startLoop = function() {

}


Game.prototype.drawCanvas = function() {

}


Game.prototype.clearCanvas = function() {

}


Game.prototype.updateCanvas = function() {

}


Game.prototype.checkIfStarsCaught = function() {

}

Game.prototype.gameOverCallback = function() {

}
```

### main.js

``` javascript
function main() {

  function buildDom() {

  }


  function buildSplashScreen() {

  }


  function buildGameScreen() {

  }


  function buildGameOverScreen() {

  }

}
```

## rocket.js

``` javascript
function Rocket() {
  this.x;
  this.y;
  this.size;
  this.speed;
  this.direction;
  this.canvas;
  this.ctx;
  this.starCounter;
}


Rocket.prototype.draw = function() {

}


Rocket.prototype.update = function() {

}


Rocket.prototype.setDirection = function() {

}


Rocket.prototype.countStarsCaught = function() {

}


Rocket.prototype.checkForStars() = function() {

}


Rocket.prototype.victory() = function() {

}
```

### star.js

``` javascript
function Star() {
  this.x;
  this.y;
  this.speed;
  this.direction;
  this.size;
  this.canvas; 
  this.ctx;
}


Star.prototype.draw = function() {
  
}


Star.prototype.update = function() {

}
```

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
  - buildSplashScreen()
  - addEventListener(buildGameScreen)

- gameScreen
  - create new Game
  - startLoop()
  - addEventListener(game.rocket.setDirection)
  
- gameOverScreen
  - buildGameOverScreen()
  - buildSplashScreen(if replay)



## Task
Task definition in order of priority

- Main - buildDom
- Main - buildSplashScreen
- Main - buildGameScreen
- Main - buildGameOverScreen
- Main - addEventListener
- Game - create startLoop
- Main - add state transitions
- Rocket - create Rocket
- Rocket - move Rocket
- Star - create Star
- Star - move Star
- Rocket - check 'collisions'
- Game - add starCounter
- Game - add countdown timer
- Game - check win

## Links


### Trello
[Link url](https://trello.com/b/EWB9OtoX/moon-landing-game)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/katharinecooney/moon-landing-game)
<!-- [Link Deploy](http://github.com) -->


<!-- ### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com) -->