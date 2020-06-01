import React, { Component } from 'react'
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import "./tabs.css";
import EventForm from './CreateEvent'

const cn = (...args) => args.filter(Boolean).join(" ");
const Tab = ({ children }) => {
    const { isActive, onClick } = useTabState();
  
    return (
      <button className={cn("tab", isActive && "active")} onClick={onClick}>
        {children}
      </button>
    );
  };


export default class tabs extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <div className = "taba">
                        <div className = "tab-lista">
                            <Tab>
                                Create Event
                            </Tab>

                            <Tab>
                                Manage Event
                            </Tab>

                        </div>

                        <div className = "tab-progress"/>
                            <Panel>
                                <br/>
                                <EventForm/>
                            </Panel>
                            

                    </div>
                </Tabs>
                
            </div>
        )
    }
}

