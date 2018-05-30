import { CREATE_BOARD } from "../actions/types";
import { createEmptyBoard } from "../lib/game";

const emptyBoard = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

export default (state = emptyBoard, { type, payload }) => {
  switch (type) {
    case CREATE_BOARD:
      return payload;

    default:
      return state;
  }
};
