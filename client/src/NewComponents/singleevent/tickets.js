import React, { Component } from "react";
import Button from "./buttons.js";
import TicketVip from "./ticketVip";
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
    this.setState({
      count: this.state.count + 1,
      basicentry: this.state.basicentry + this.state.a,
    });
  };
  decrementCount = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1,
        basicentry: this.state.basicentry - this.state.a,
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
      });
    }
  }

  render() {
    let { count } = this.state;
    let { basicentry } = this.state;
    let Vip = false
    
    let { vipentry } = this.state;
    if(vipentry > 0){
        Vip = true
    }
    let VipTicket;
    console.log("Hgfjhjlhgjfh2");
    if (Vip ===true) {
      console.log("Hgfjhjlhgjfh");
      VipTicket = <TicketVip vipentry={this.state.vipentry} />;
    }
    const VIPTICKET = <div>{VipTicket}</div>;

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
                  <div className="number-of-ticket flex justify-content-between align-items-center">
                    <Button title="- " task={() => this.decrementCount()} />
                    <input
                      type="number"
                      className="ticket-count"
                      Value={count}
                    />
                    <Button title="+" task={() => this.incrementCount()} />
                  </div>
                  <Button
                    title="Clear"
                    className="clear-ticket-count"
                    task={() => this.handleChange(0)}
                  />
                </div>
                <input
                  type="submit"
                  className="btn gradient-bg"
                  defaultValue="Buy Ticket"
                />
              </div>
              {vipentry ? VIPTICKET : null}
              {/* <TicketVip vipentry={this.state.vipentry} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default tickets;
