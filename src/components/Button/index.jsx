import { Component } from "react";

export class Button extends Component {
  render() {
    const { onclick, text } = this.props;
    return <button onClick={onclick}>{text}</button>;
  }
}
