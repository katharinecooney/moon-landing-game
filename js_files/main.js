'use strict';
let music = new Audio();
music.src = '../Mii Channel Theme - Nintendo Wii Music-[AudioTrimmer.com].mp3';

function main(){

  const mainElement = document.querySelector('main');

  // this will create the html elements needed for each screen
  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  // this will make our intro screen
  function buildSplashScreen() {
    let splashScreen = buildDom(
      `<div id='splash-container'>
      <div id='splash-content'>
        <h1>Moon Landing</h1>
        <p>Move the rocket and catch the stars</p>
        <button id="start-button">Start</button>
        </div>
      </div>`
    );

    let startButton = document.querySelector('#start-button');
    startButton.addEventListener('click', function(){
      buildGameScreen();
    });
  }
  
  // this makes the actual game screen
  function buildGameScreen() {
    let gameScreen = buildDom(`
    <section id='game-container'>
      <section id="game-info">
        <section id="star-counter"></section>
        <section id="timer"></section>
      </section>
      <canvas></canvas>
    </section>
    `);
    
    // we select and style the <section> that contains our game canvas
    const gameContainerElement = document.querySelector('#game-container');
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    // we select and style the canvas
    const canvas = document.querySelector('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.style.background = "linear-gradient( rgba(6, 1, 11, 0.5), rgba(10, 5, 15, 0.5) ), url('../images/4k-wallpaper-astro-astrology-1146134.jpg') center / cover no-repeat  ";

    // we create a new game and store it in a variable
    const game = new Game(canvas);

    // we select the <section> that will contain our timer
    const timerDisplay = document.getElementById('timer');

    // music.play();
    
    // we create a function that will subtract from our game.timeRemaining 
    function timeIt() {
        game.timeRemaining--;
        timerDisplay. innerHTML = game.timeRemaining;
        return game.timeRemaining;
    }

    // we run our above function so that it subtracts from our game.timeRemaining every second
    setInterval(timeIt, 1000);

    // we finally run the game!
    game.startLoop();

    // we are passing the buildGameOverScreen method to the game.js file's callGameOverScreen so the file can access our method
    game.callGameOverScreen(buildGameOverScreen);
    game.callWinScreen(buildWinScreen);
   

    document.addEventListener('keydown', function(event){
      if(event.keyCode === 38) {
        game.rocket.setYdirection(-1);
      } else if (event.keyCode === 40) {
        game.rocket.setYdirection(1);
      }
    });

    document.addEventListener('keyup', function(event){
      if(event.keyCode === 38 || event.keyCode === 40) {
        game.rocket.setYdirection(0);
      }
    });

    document.addEventListener('keydown', function(event){
      if(event.keyCode === 37) {
        game.rocket.setXdirection(-1);
      } else if (event.keyCode === 39) {
        game.rocket.setXdirection(1);
      }
    });

    document.addEventListener('keyup', function(event){
      if(event.keyCode === 37 || event.keyCode === 39) {
        game.rocket.setXdirection(0);
      }
    });
  }

  function buildGameOverScreen() {
    let gameOverScreen = buildDom(
      `<div id='game-over-container'>
        <div id='game-over-content'>
          <h1>Game Over!</h1>
          <button id="replay-button">Replay</button>
        </div>
      </div>`
    );
    let replayButton = document.querySelector('#replay-button');
    replayButton.addEventListener('click', buildGameScreen);
  }

  function buildWinScreen() {
    let winScreen = buildDom(
      `<div id='win-container'>
        <div id='win-content'>
          <h1>You win!</h1>
          <button id="replay-button">Replay</button>
        </div>
      </div>`
    );
    let replayButton = document.querySelector('#replay-button');
    replayButton.addEventListener('click', buildGameScreen);
  }
    
  // at the end of our function, we will call buildSplashSceen
  buildSplashScreen();
}

// when the window loads, we will run everything in the main function, beginning with buildSplashScreen
window.addEventListener('load', main);
