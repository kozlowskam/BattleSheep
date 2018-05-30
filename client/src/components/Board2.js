import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "./Button";
import Cell from "./Cell";
import "./Board.css";
import { createEmptyBoard } from "../lib/game";

let board = createEmptyBoard();

const renderCell = (makeMove, rowIndex, cellIndex, symbol, hasTurn) => {
  return (
    <Cell
      disabled={hasTurn}
      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}
    >
      {symbol || "-"}
    </Cell>
  );
};

export default ({ board, makeMove }) =>
  board.map((cells, rowIndex) => (
    <div key={rowIndex}>
      {cells.map((symbol, cellIndex) =>
        renderCell(makeMove, rowIndex, cellIndex, symbol, false)
      )}
    </div>
  ));
