import React, { Component } from 'react'
import EventSearchBar from './eventsearch'
import Eventcard from './searchcard'
export class searchcontainer extends Component {
    render() {
        return (
            <div>
                <EventSearchBar />
                <Eventcard />
            </div>
        )
    }
}

export default searchcontainer
