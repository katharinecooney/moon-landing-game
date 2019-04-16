'use strict';
let music = new Audio();
music.src = "/Users/katharinecooney/Desktop/Ironhack/spaceGame/Mii Channel Theme - Nintendo Wii Music-[AudioTrimmer.com].mp3";

function main(){

  const mainElement = document.querySelector('main');

  // this will create the html elements needed for each screen
  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

//***************************************************///
 // add easy button and hard button
  // assign each button an ID
  // make a function that will store the button's id (use a parameter!)
  // assign each button an onClick attribute
  // onClick = "<functionName>(this.id)"

  // this will make our intro screen

  function buildSplashScreen() {  
    let splashScreen = buildDom(
      `<div id='splash-container'>
        <div id='splash-content'>
          <h1>Moon Landing</h1>
          <p>Move the rocket and catch the stars</p>
          <div id="levelButtonContainer">
            <button class="easy-button">Easy</button>
            <button class="hard-button">Hard</button>
          </div>
        </div>
       </div>
       `
    );

    let easyButton = document.querySelector('.easy-button');
    easyButton.addEventListener('click', function(){
      buildGameScreen('easy');
    });

    let hardButton = document.querySelector('.hard-button');
    hardButton.addEventListener('click', function(){
      buildGameScreen('hard');
    });
  }

  
  // function buildSplashScreen() {
  //   let splashScreen = buildDom(
  //     `<div id='splash-container'>
  //       <div id='splash-content'>
  //         <h1>Moon Landing</h1>
  //         <p>Move the rocket and catch the stars</p>
  //         <button id="start-button">Start</button>
  //       </div>
  //      </div>
  //      `
  //   );
  //   let startButton = document.querySelector('#start-button');
  //   startButton.addEventListener('click', function(){
  //     buildGameScreen();
  //   });
  // }
  
  // this makes the actual game screen
  function buildGameScreen(level) {
    let gameScreen = buildDom(`
    <section id='game-container'>
      <section id="game-info">
        <section id="star-counter"></section>
        <section id="timer"></section>
      </section>
      <canvas></canvas>
      <section id='rules'>
        <div class='rules-div'>
         <img id='rules-image' src="/Users/katharinecooney/Desktop/Ironhack/spaceGame/images/keyboard.png">
         <p id='rules-text'>Use the arrows to catch the stars. Avoid the comets! </p>
        </div>
      </section>
    `);
    
    // we select and style the <section> that contains our game canvas
    let gameContainerElement = document.querySelector('#game-container');
    let width = gameContainerElement.offsetWidth;
    let height = gameContainerElement.offsetHeight;

    // we add an event listener to our window so that when it resizes, the width and height will be reset to the gameContainerElement's new width and height, and then we will assign that width and height to our canvas
    window.addEventListener('resize', () => {
      width = gameContainerElement.offsetWidth;
      height = gameContainerElement.offsetHeight;
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
    })


    // we select and style the canvas
    const canvas = document.querySelector('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.style.background = "linear-gradient( rgba(6, 1, 11, 0.5), rgba(10, 5, 15, 0.5) ), url(./images/4k-wallpaper-astro-astrology-1146134.jpg) center / cover no-repeat";

    // we create a new game and store it in a variable
    const game = new Game(canvas, level);

    // we are passing the buildGameOverScreen method to the game.js file's callGameOverScreen so the file can access our method
    game.callGameOverScreen(buildGameOverScreen);
    game.callWinScreen(buildWinScreen);

    // we select the <section> that will contain our timer
    const timerDisplay = document.getElementById('timer');

    music.play();
    
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
    // let failSound = new Audio();
    // failSound.src = "../zapsplat_cartoon_fail_negative_descending_musical_tuba_marimba_oboe_18126.mp3";
    // failSound.play();
    let gameOverScreen = buildDom(
      `<div id='game-over-container'>
        <div id='game-over-content'>
          <h1>Game Over!</h1>
          <p>Play again?</p>
          <div class="replayLevelButtonContainer">
            <button class="replay-easy">Easy</button>
            <button class="replay-hard">Hard </button>
          </div>
        </div>
      </div>`
    );
    let replayEasyButton = document.querySelector('.replay-easy');
    replayEasyButton.addEventListener('click', function(){
      buildGameScreen('easy');
    });

    let replayHardButton = document.querySelector('.replay-hard');
    replayHardButton.addEventListener('click', function(){
      buildGameScreen('hard');
    });
    let failMusic = new Audio();
    failMusic.src = "/Users/katharinecooney/Desktop/Ironhack/spaceGame/zapsplat_cartoon_fail_negative_descending_musical_tuba_marimba_oboe_18126.mp3";
    failMusic.play();
  }

  function buildWinScreen() {
    let winScreen = buildDom(
      `<div id='win-container'>
        <div id='win-content'>
          <h1>You win!</h1>
          <p>Play again?</p>
          <div class="replayLevelButtonContainer">
            <button class="replay-easy">Easy</button>
            <button class="replay-hard">Hard </button>
          </div>
        </div>
      </div>`
    );
    
    let replayEasyButton = document.querySelector('.replay-easy');
    replayEasyButton.addEventListener('click', function() {
      buildGameScreen('easy');
    });

    let replayHardButton = document.querySelector('.replay-hard');
    replayHardButton.addEventListener('click', function () {
      buildGameScreen('hard');
    });

    let clapping = new Audio();
    clapping.src = "/Users/katharinecooney/Desktop/Ironhack/spaceGame/Applause Crowd Cheering sound effect-[AudioTrimmer.com].mp3";
    clapping.play();
  }
    
  // at the end of our function, we will call buildSplashSceen
  buildSplashScreen();
}

// when the window loads, we will run everything in the main function, beginning with buildSplashScreen
window.addEventListener('load', main);
