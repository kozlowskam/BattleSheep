import { CREATE_GAME, MOVE } from "./types";
import { fillBoard } from "../lib/game";

export const createGame = (rows = 6) => {
  const [board, sheep] = fillBoard(rows);
  return {
    type: CREATE_GAME,
    payload: {
      board,
      sheep
    }
  };
};

export const move = (row, col) => ({
  type: MOVE,
  payload: {
    row,
    col
  }
});
