import { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { onclick, text, disabled } = this.props;
    return (
      <button className="button" onClick={onclick} disabled={disabled}>
        {text}
      </button>
    );
  }
}
