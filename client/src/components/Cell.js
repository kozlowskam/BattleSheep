import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "./Button.css";

export default function Cell(props) {
  return (
    <div style={{ display: "inline-block" }}>
      <button class="Button">{props.index}</button>
    </div>
  );
}