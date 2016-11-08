angular.module('TicTacToe')
  .controller('GameController', GameController);

currentPlayer = 'X';

function GameController() {
  this.cells = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];

  function mrClick($index) {
    if(this.cells[$index] === null) {
      this.cells[$index] = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
    }
  }
  this.mrClick = mrClick;
}


// const clickCounter = 0;
// const player = 'X';
//
// for(var i=0;i<tiles.length;i++) {
//   tiles[i].addEventListener('click', playerMove);
// }
//
// function playerMove() {
//   if(!this.textContent) {
//     clickCounter++;
//     player = clickCounter%2 === 0 ? 'O' : 'X';
//     this.textContent = player;
//     checkForWin();
//   }
// }
