import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "./Button";
import Cell from "./Cell";
import "./Board.css";
import { createEmptyBoard } from "../lib/game";

export class Board extends PureComponent {

  createEmptyBoard() {
      var boardsize = 10
      var board = [];
      var UIBoard = []
      for (var i = 0; i < boardsize; i++) {
        board.push([]);
        UIBoard.push([<div/>]);

        for ( var j = 0; j < boardsize; j++) {
          board[i].push({
            occupied: false,
            discovered: false
          });
          UIBoard.push(<Cell index={[i,j]} />)
        }
      }
      return UIBoard
    }
 
  render() {
    return (<div>{this.createEmptyBoard()}</div>
      
    )
  }
}


export default connect(null, createEmptyBoard)(Board);
 