import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { move } from "../actions/game";

export class Button extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    //move: PropTypes.func.isRequired,
    sheep: PropTypes.bool,
    scored: PropTypes.bool,
    empty: PropTypes.bool,
    discovered: PropTypes.bool
  };

  handleClick = () => {
    const { x, y, makeMove, sheep, discovered, empty, scored } = this.props;
    if (sheep) return;
    makeMove(y, x);
  };

  classNames() {
    const { value, sheep, discovered, empty, scored } = this.props;

    let classnames = ["Button"];
    classnames.push(`fill-${value || 0}`);
    if (sheep) classnames.push("sheep");
    if (discovered) classnames.push("discovered");
    if (empty) classnames.push("empty");
    if (scored) classnames.push("scored");

    return classnames.join(" ");
  }

  render() {
    return <div className={this.classNames()} onClick={this.handleClick} />;
  }
}

const mapStateToProps = ({ sheep }, { x, y }) => ({
  sheep: sheep.filter(l => l[0] === y && l[1] === x).length > 0
});

export default connect(mapStateToProps, { makeMove: move })(Button);
