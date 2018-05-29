export const numberOfValues = (rowOrCol, value) => {
  return rowOrCol.filter(v => v === value).length;
};

export const rows = board => {
  return board;
};

// Returns a transposed array of columns on the board
export const cols = board => {
  return board.map((row, y) => row.map((v, x) => board[x][y]));
};

export const filledPositions = board => {
  const pos = board.map((row, rowIndex) => {
    return row
      .map((col, colIndex) => (col === 0 ? null : [rowIndex, colIndex]))
      .filter(pos => pos !== null);
  });
  return [].concat.apply([], pos);
};

export const fillBoard = (n = 6, solve = false) => {
  const boardSize = n * n;
  let board = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let tries = 0;

  const row = Math.floor(Math.random() * n);
  const col = Math.floor(Math.random() * n);

  const ones =
    numberOfValues(cols(board)[col], 1) + numberOfValues(rows(board)[row], 1);
  const twos =
    numberOfValues(cols(board)[col], 2) + numberOfValues(rows(board)[row], 2);
  const value = ones > twos ? 2 : 1;

  tries++;

  return [board, filledPositions(board)];
};
