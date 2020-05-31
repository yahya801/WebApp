import React, { Component } from 'react'
import EventpageHeader from './pageheader'
import EventSearch from './search/searchcontainer'
import CatTabs from './CategoryTabs/cattabs'


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
