import React, { Component } from "react";
import Button from "./buttons.js";

export class tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 1,
      a: this.props.basicentry || "",
      b: this.props.vipentry || "",
      basicentry: this.props.basicentry || "",
      vipentry: this.props.vipentry || "",
    };
  }

  incrementCount = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1,
        basicentry: this.state.basicentry + this.state.a,
      });
    }
  };
  decrementCount = () => {
    if (this.state.count > 1 || this.state.vipentry) {
      this.setState({
        count: this.state.count - 1,
        basicentry: this.state.basicentry - this.state.a,
      });
    }
  };
  incrementCount2 = () => {
    if (this.state.count2 < 10) {
      this.setState({
        count2: this.state.count2 + 1,
        vipentry: this.state.vipentry + this.state.b,
      });
    }
  };
  decrementCount2 = () => {
    if (this.state.count2 > 1 || this.state.basicentry) {
      this.setState({
        count2: this.state.count2 - 1,
        vipentry: this.state.vipentry - this.state.b,
      });
    }
  };

  handleChange(a) {
    if (a === 0) {
      console.log("hhh");
      this.setState({
        count: 1,
        basicentry: this.state.a,
      });
    } else if (a === 1) {
      console.log("hhh2");
      this.setState({
        count2: 1,
        vipentry: this.state.b,
      });
    }
  }

  render() {
    let { count } = this.state;
    let { basicentry } = this.state;
    let { count2 } = this.state;
    let { vipentry } = this.state;
    let Vip = false;

    // let { vipentry } = this.state;
    if (vipentry > 0) {
      Vip = true;
    } else {
      count2 = 0;
    }
    // let VipTicket;
    // console.log("Hgfjhjlhgjfh2");
    // if (Vip === true) {
    //   console.log("Hgfjhjlhgjfh");
    //   VipTicket = <TicketVip vipentry={this.state.vipentry} />;
    // }
    // const VIPTICKET = <div>{VipTicket}</div>;

    return (
      <div>
        <div className="row" style={{ width: "1500px", paddingLeft: "250px" }}>
          <div className="col-12">
            <div className="event-tickets">
              <div className="ticket-row flex flex-wrap justify-content-between align-items-center">
                <div className="ticket-type flex justify-content-between align-items-center">
                  <h3 className="entry-title">
                    <span>Siver Ticket</span> Basic entry
                  </h3>
                  <div className="ticket-price">Rs {basicentry}</div>
                </div>
                <div className="flex align-items-center">
                  <div
                    className="number-of-ticket flex justify-content-between align-items-center"
                    style={{ position: "inherit" }}
                  >
                    <Button title="- " task={() => this.decrementCount()} />
                    <input
                      type="number"
                      className="ticket-count"
                      Value={count}
                      disabled
                    />
                    <Button title="+" task={() => this.incrementCount()} />
                  </div>
                  <Button
                    title="Clear"
                    className="clear-ticket-count"
                    task={() => this.handleChange(0)}
                  />
                </div>
              </div>
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
                    <input
                      type="number"
                      className="ticket-count"
                      Value={count2}
                      disabled
                    />
                    {/* <span className="increase-ticket">+</span> */}
                    <Button title="+" task={() => this.incrementCount2()} />
                  </div>
                  <Button
                    title="Clear"
                    className="clear-ticket-count"
                    task={() => this.handleChange(1)}
                  />
                </div>
                <input
                  type="submit"
                  className="btn gradient-bg"
                  defaultValue="Buy Ticket"
                />
              </div>
              {/* {vipentry ? VIPTICKET : null} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default tickets;
