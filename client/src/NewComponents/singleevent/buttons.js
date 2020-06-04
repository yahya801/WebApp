import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    let { title, task } = this.props;
    return <button type={this.props.type}onClick={task}>{title}</button>;
  }
}

export default Buttons;
