import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    let { title, task } = this.props;
    return <button onClick={task}>{title}</button>;
  }
}

export default Buttons;
