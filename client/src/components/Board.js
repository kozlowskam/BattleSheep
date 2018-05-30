import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "./Button";
import Cell from "./Cell";
import "./Board.css";
import { createEmptyBoard } from "../lib/game";

export class Board extends PureComponent {

  

  createEmptyBoard = () =>  {
      var boardsize = 10
      var board = [];
      for (var i = 0; i < boardsize; i++) {
        board.push([]);
        for ( var j = 0; j < boardsize; j++) {
          board[i].push({
            occupied: false,
            discovered: false
          });
        }
      }
      return board;
    }


  render() {

    createEmptyBoard().forEach(function(row){
      row.forEach(function(cell) {

      })
      return <Cell/>
    });

  }
}
//     const boardsize = 10;
//     var Board = [];
//     for (var i = 0; i < boardsize; i++) {
//       Board.push(this.renderRow(i));
//     }

//     return Board;
//     return <div>{Board}</div>;
//   }
// }

export default connect(null, createEmptyBoard)(Board);
