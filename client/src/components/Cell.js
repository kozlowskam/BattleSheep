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



    
  onCellClick = () => {
    console.log(this.props.cellPosition, 'Log made in line 13 cell.js')
    makeShot(testBoard, this.props.cellPosition)
    request
      .put("http://localhost:4000/games/:id")
      .send({}) 
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

