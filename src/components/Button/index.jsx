import { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { onclick, text } = this.props;
    return (
      <button className="button" onClick={onclick}>
        {text}
      </button>
    );
  }
}
