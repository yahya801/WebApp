import React, { Component } from "react";
import Button from "./buttons.js";
import './style.css';
export class ticketVip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count2: 1,

      b: this.props.vipentry || "",

      vipentry: this.props.vipentry || "",
    };
  }

  handleChange(a) {
    if (a === 0) {
      console.log("hhh");
      this.setState({
        count: 1,
      });
    } else if (a === 1) {
      console.log("hhh2");
      this.setState({
        count2: 1,
        vipentry: this.state.b,
      });
    }
  }
  incrementCount2 = () => {
    this.setState({
      count2: this.state.count2 + 1,
      vipentry: this.state.vipentry + this.state.b,
    });
  };
  decrementCount2 = () => {
    if (this.state.count2 > 1) {
      this.setState({
        count2: this.state.count2 - 1,
        vipentry: this.state.vipentry - this.state.b,
      });
    }
  };
  render() {
    let { count2 } = this.state;
    let { vipentry } = this.state;
    return (
      <div>
        <div className="ticket-row flex flex-wrap justify-content-between align-items-center">
          <div className="ticket-type flex justify-content-between align-items-center">
            <h3 className="entry-title">
              <span>Gold Ticket</span>Vip entrry
            </h3>
            <div className="ticket-price">Rs {vipentry}</div>
          </div>
          <div className="flex align-items-center">
            <div className="number-of-ticket flex justify-content-between align-items-center">
              {/* <span className="decrease-ticket">-</span> */}
              <Button title="- " task={() => this.decrementCount2()} />
              <input type="number" className="ticket-count" Value={count2} />
              {/* <span className="increase-ticket">+</span> */}
              <Button title="+" task={() => this.incrementCount2()} />
            </div>
            <Button
            to="/fvhjkj"
              title="Clear"
              className="btn gradient-bg"
              task={() => this.handleChange(1)}
            />
          </div>
          <input
            type="submit"
            className="btn gradient-bg"
            defaultValue="Buy Ticket"
          />
        </div>
      </div>
    );
  }
}

export default ticketVip;
