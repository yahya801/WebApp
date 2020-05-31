import React, { Component } from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import "./cattabs.css";
import Privatecards from "../Privatecard";
import Corperatecard from "../Corperatecard"
import Charitycard from "../Charitycard"

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button className={cn("tab", isActive && "active")} onClick={onClick}>
      {children}
    </button>
  );
};

export class cattabs extends Component {
  
  render() {
    return (
      <Tabs>
        <div className="taba">
          <div className="tab-lista">
            <Tab>Private</Tab>

            <Tab>Corperate</Tab>

            <Tab>Charity</Tab>
          </div>

          <div className="tab-progress" />

          <Panel>
            <br />
            <Privatecards />
          </Panel>

          <Panel>
          <Corperatecard />
          </Panel>

          <Panel>
          <Charitycard />
          </Panel>
        </div>
      </Tabs>
    );
  }
}

export default cattabs;
