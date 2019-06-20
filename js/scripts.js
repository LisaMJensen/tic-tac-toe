//Back end logic

// function Player() {
//
//   // this.mark =;
//   this.active = active;
// }
// var player1 = new Player('x');
// var player2 = new Player('o');
// //
// function Game() {
//
// }
//
// function Space() {
//
// xCoordinate = ;
// yCoordinate = ;
//
// }
// var board;
// const player1 = "O";
// const winConditions = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [6,4,2],
// ]
function Player(activePlayer) {
  this.activePlayer = activePlayer;
}

function playerSwitch() {
  if (player1.activePlayer === true) {
    player2.activePlayer = true;
    player1.activePlayer = false;
  } else {
  player1.activePlayer = true;
  player2.activePlayer = false;
  }
}

var origBoard;
const player1 = 'O';
const player2 = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none";
	origBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square) {
  if (typeof origBoard[square.target.id] == 'number'){
	turn(square.target.id, player1)
  player1.playerSwitch();
  }
}

function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(origBoard, player)
  if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player)  ? a.concat(i) : a, [])
  let gameWon = null;
  for (let [index, win] of winCombos.entries()){
    if (win.every(elem => plays.indexOf(elem) > -1)){
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for(let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == player1 ? "teal" : "salmon";
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false);
  }
}

//User Interface
$(document).ready(function() {
  // $("").click(function(event) {
  // event.preventDefault();
// });
});
