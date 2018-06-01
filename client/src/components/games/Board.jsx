import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Board.css";

function makeShot(board, shotOnCell) {
  // set the cell.discovered on which the shot was fired to True,
  // returns true if the cell was occupied else returns false
  // takes the playing board and targeted cell as arguments
  const cell = board[shotOnCell[0]][shotOnCell[1]];
  cell.discovered = true;
  if (cell.occupied === true) {
    console.log("shot hit!");
    return true;
  } else {
    console.log("shot misses!");

    cell.discovered = true;
    return board;
  }
}

const request = require("superagent");
const board = this.props;

const cellColors = {
  unexplored: (10, 245, 22),
  exploredEmpty: (255, 8, 82),
  exploredOccupied: (255, 255, 255)
};

const renderCel = (makeShot, hasTurn, rowIndex, cellIndex) => {
  return (
    <div style={{ display: "inline-block" }}>
      <button className="cellButton" onClick={this.onCellClick}>
        {this.props.cellPosition}
        key={`${rowIndex}-${cellIndex}`}
      </button>
    </div>
  );
};

const updateCell = cell => {
  if (board[cell.props.position[0]][cell.props.position[1]].occupied) {
  }
};

const onCellClick = () => {
  console.log(this.props.position, "Log made in line 13 cell.js");
  makeShot(board, this.props.position);
  request.put("http://localhost:4000/games/:id").send({});
  this.updateCell(this);
  return this.props.cellPosition;
};

export default ({ board, makeMove }) =>
  board.map((cells, rowIndex) => (
    <div key={rowIndex}>
      {cells.map((symbol, cellIndex) =>
        renderCel(makeMove, rowIndex, cellIndex)
      )}
    </div>
  ));
