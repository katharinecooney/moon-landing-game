'use strict';

const mainElement = document.querySelector('main');

function main(){

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
      </div>
      `
    );

    let startButton = document.querySelector('#start-button');

    startButton.addEventListener('click', function(){
      buildGameScreen();
    });

  }

  
  function buildGameScreen() {
    let gameScreen = buildDom(`
    <section id='game-container'>
      <canvas>
      </canvas>
    </section>
    `);
    
    let canvas = document.querySelector('canvas');

    const game = new Game(canvas);
    game.startLoop();
    
    // setTimeout(buildGameOverScreen, 3000)
    
  }

  // add canvas, div in the center, h1 title (game over), and a button
  function buildGameOverScreen() {
    let gameOverScreen = buildDom(
      `<div id='game-over-container'>
        <div id='game-over-content'>
          <h1>Game Over!</h1>
          <button id="replay-button">Start</button>
        </div>
      </div>
      `
    )
    let replayButton = document.querySelector('#replay-button');
    replayButton.addEventListener('click', buildSplashScreen);
  }
buildSplashScreen();
}



// when the window loads, we will run everything in the main function

window.addEventListener('load', main)