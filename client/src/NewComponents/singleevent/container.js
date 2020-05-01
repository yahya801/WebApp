import React, { Component } from 'react'
import Eventdescription from './eventdescription'
import EventHeader from './singleeventheader'



export class container extends Component {
    render() {
        return (
            <div >
                
                <EventHeader  eventname="IBA Probattle" /> 
                <div style={{paddingLeft: "100px"}}>
                <Eventdescription/>
                </div>
            </div>
        )
    }
}

export default container
