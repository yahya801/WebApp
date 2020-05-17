import React, { Component } from 'react'
import EventpageHeader from './pageheader'
import EventSearch from './search/searchcontainer'
import CatTabs from './CategoryTabs/cattabs'
import Eventcards from './eventcard'

export class eventpage extends Component {
    render() {
        return (
            <div>
                <EventpageHeader />
                <EventSearch />
                <CatTabs />
                
                {/* <Eventcards /> */}
            </div>
        )
    }
}

export default eventpage
