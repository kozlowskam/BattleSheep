import { CREATE_BOARD } from "./types";
import { createEmptyBoard } from "../lib/game";

export const createBoard = () => {
  return {
    type: CREATE_BOARD,
    payload: createEmptyBoard()
  };
};
