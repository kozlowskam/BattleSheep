const boardsize = 10; // total x and y size of board
var i = 0;
var j = 0;

function createEmptyBoard() {
  // creates an empty board. are arrays in arrays. each cell has
  // an object containing booleans of occupied and explored states
  var board = [];
  for (i = 0; i < boardsize; i++) {
    board.push([]);
    for (j = 0; j < boardsize; j++) {
      board[i].push({
        occupied: false,
        discovered: false
      });
    }
  }
  return board;
}
