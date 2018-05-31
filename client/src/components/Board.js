import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Cell from "./Cell";
import "./Board.css";
import { createRandomBoard } from "../lib/game";

export var testBoard = createRandomBoard()
console.log(testBoard)

const cellColors = {
  'unexplored' : (10, 245, 22),
  'exploredEmpty' : (255, 8, 82),
  'exploredOccupied' : (255,255,255),
}

export class Board extends PureComponent {
  
  createUIBoard() {
      var boardsize = 10
      var UIBoard = []
      for (var i = 0; i < boardsize; i++) {
        UIBoard.push([<div/>]);
        for ( var j = 0; j < boardsize; j++) {
          UIBoard.push(
            <Cell 
              position={[i,j]}
             />)
        }
      }
      return UIBoard
    }
 



  render() {
    return (<div>{this.createUIBoard()}</div>
    )
  }
}

export default connect(null)(Board);
 