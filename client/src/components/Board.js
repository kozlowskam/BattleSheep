import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "./Button";
import "./Board.css";

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    dupeRows: PropTypes.arrayOf(PropTypes.number),
    dupeCols: PropTypes.arrayOf(PropTypes.number),
    errors: PropTypes.shape({
      rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
      cols: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    }).isRequired
  };

  renderRow = (row, index) => {
    return (
      <div className="row" key={index}>
        {row.map(this.renderButton(index))}
      </div>
    );
  };

  renderButton = rowIndex => (value, index) => {
    const { dupeCols, dupeRows, board } = this.props;

    const dupe = dupeCols.includes(index) || dupeRows.includes(rowIndex);

    return (
      <Button key={index} value={value} dupe={dupe} x={index} y={rowIndex} />
    );
  };

  render() {
    return <div className="Board">{this.props.board.map(this.renderRow)}</div>;
  }
}

const mapStateToProps = ({ board }) => ({
  board
});

export default connect(mapStateToProps)(Board);
