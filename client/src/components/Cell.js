import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cellButton from "./cellButton.css";
import { connect } from "react-redux";
import { makeShot } from '../lib/game'
import { testBoard } from './Board'

const request = require('superagent')

class Cell extends PureComponent {
  constructor(props) {
    super(props)
    }

cellColors = {
  'unexplored' : (10, 245, 22),
  'exploredEmpty' : (255, 8, 82),
  'exploredOccupied' : (255,255,255),
}

  
  updateCell =(cell) => {
    if (testBoard[cell.props.position[0]]
        [cell.props.position[1]]
        .occupied) {
     
  }}

  onCellClick = () => {
    console.log(this.props.position, 'Log made in line 13 cell.js')
    makeShot(testBoard, this.props.position)
    request
      .put("http://localhost:4000/games/:id")
      .send({}) 
      this.updateCell(this)
    return this.props.cellPosition
  }  

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <button 
          className="cellButton"

          onClick = {this.onCellClick}>
          {this.props.cellPosition}
        </button>
      </div>
    );
  }  
}


export default connect(null)(Cell);

