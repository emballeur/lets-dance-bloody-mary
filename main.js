// main.js => Managing DOM elements & event listeners

// GLOBAL VARIABLES
// canvas setup
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// DOM elements
let splashScreen = document.querySelector("#splash-screen");
let startButton = document.querySelector("#start-btn");
let restartButtonLost = document.querySelector("#restart-btn-gameover");
let restartButtonWon = document.querySelector("#restart-btn-gamewon");
let gameOverScreen = document.querySelector("#gameover-screen");
let gameWonScreen = document.querySelector("#gamewon-screen");

// main game global variable
let gameObj;

// ADD EVENT LISTENERS
startButton.addEventListener("click", () => {
  canvas.style.display = "block";
  splashScreen.style.display = "none";

  //splashScreen.getElementsByClassName('someclassname').display = "none";

  // HERE WE NEED TO CREATE THE GAME

  gameObj = new Game(); //=> game will have all properties and medthods of Game Class
  gameObj.gameLoop();
  //=> invoke method
  // Here we neeed to start the game
});

restartButtonLost.addEventListener("click", () => {
  canvas.style.display = "block";
  gameOverScreen.display = "none";
});

restartButtonWon.addEventListener("click", () => {
  canvas.style.display = "block";
  gameWonScreen.display = "none";
});

window.addEventListener("keydown", (e) => {
  //console.log(e.code);
  switch (e.code) {
    case "ArrowLeft":
      gameObj.player.glassSpeed(-1.1);
      break;
    case "ArrowRight":
      gameObj.player.glassSpeed(1.1);
      break;
  }
});
