'use strict';

const mainElement = document.querySelector('main');

// NEST THIS IN A 'MAIN' FUNCTION //

// this will create the html elements needed for each screen
function buildDom(html) {
  mainElement.innerHTML = html;
  return mainElement;
}

// add canvas, a div in the center, and an h1 title, p instructions, and a button
function buildSplashScreen() {

}

// add canvas
function buildGameScreen() {

}

// add canvas, div in the center, h1 title (game over), and a button
function buildGameOverScreen() {

}

// when the window loads, we will run everything in the main function
window.addEventListener('load', main)