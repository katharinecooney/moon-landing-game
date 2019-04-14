'use strict';
// let counter = 10;

function main(){

  const mainElement = document.querySelector('main');
  

  // this will create the html elements needed for each screen
  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }


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
    

    const gameContainerElement = document.querySelector('#game-container');
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;


    const canvas = document.querySelector('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.style.background = "linear-gradient( rgba(2, 1, 8, 0.5), rgba(3, 1, 15, 0.5) ),   url('../images/4k-wallpaper-astro-astrology-1146134.jpg') center / cover no-repeat  ";


    const game = new Game(canvas);
   

    
    const timerDisplay = document.getElementById('timer');
    function timeIt() {
      
        game.timeRemaining--;
        timerDisplay. innerHTML = game.timeRemaining;
        return game.timeRemaining;
    }
    setInterval(timeIt, 1000);

    game.startLoop();
    game.callGameOverScreen(buildGameOverScreen);

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


  // add canvas, div in the center, h1 title (game over), and a button
  function buildGameOverScreen() {
    let gameOverScreen = buildDom(
      `<div id='game-over-container'>
        <div id='game-over-content'>
          <h1>Game Over!</h1>
          <button id="replay-button">Start</button>
        </div>
      </div>`
    );

    let replayButton = document.querySelector('#replay-button');
    replayButton.addEventListener('click', buildGameScreen);
  }
    
  
  buildSplashScreen();
}





// when the window loads, we will run everything in the main function
window.addEventListener('load', main);