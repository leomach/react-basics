import { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { children, onclick, disabled } = this.props;
    return (
      <button className="button" onClick={onclick} disabled={disabled}>
        {children}
      </button>
    );
  }
}
