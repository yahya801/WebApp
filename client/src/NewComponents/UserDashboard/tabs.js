import React, { Component } from 'react'
import { Tabs, useTabState, Panel } from "@bumaga/tabs";
import "./tabs.css";
import Private from "./CategoryTabs/private";
import Charity from "./CategoryTabs/charity";
import Corperate from "./CategoryTabs/corperate"
import {Button} from 'react-bootstrap';
import EventCards from './Cards';


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
                                Event Details
                            </Tab>

                            <Tab>
                                Booking Details
                            </Tab>

                        </div>

                        <div className = "tab-progress"/>
                            <Panel>
                                <br/>
                                <h2>Private</h2>
                                <br/>
                                <Private/>
                                <br/>
                                <h2>Charity</h2>
                                <br/>
                                <Charity/>
                                <br/>
                                <h2>Corperate</h2>
                                <br/>
                                <Corperate/>
                                <br/>
                            </Panel>
                            <Panel>
                                <br/>
                                <EventCards/>
                                <br/>
                            </Panel>
                            

                    </div>
                </Tabs>
                
            </div>
        )
    }
}
