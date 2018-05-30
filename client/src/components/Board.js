import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "./Button";
import Cell from "./Cell";
import "./Board.css";
import { createEmptyBoard } from "../lib/game";

export class Board extends PureComponent {
  /*static propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  };*/

  renderCell(i) {
    const cells = this.props;

    return <Cell />;
  }

  renderRow(i) {
    var arr = [];
    for (var x = 0; x < 10; x++) {
      arr.push(this.renderCell(i + x));
    }
    return <div> {arr} </div>;
  }

  render() {
    const boardsize = 10;
    var Board = [];
    for (var i = 0; i < boardsize; i++) {
      Board.push(this.renderRow(i));
    }

    return Board;
    return <div>{Board}</div>;
  }
}

export default connect(null, createEmptyBoard)(Board);
