import React, { Component } from 'react'
import EventpageHeader from './pageheader'
import EventSearch from './search/searchcontainer'
import CatTabs from './CategoryTabs/cattabs'
import Footer from "../footer"


export class eventpage extends Component {
    render() {
        return (
            <div>
                <EventpageHeader />
                <EventSearch />
                <CatTabs />
                <Footer />
                
                {/* <Eventcards /> */}
            </div>
        )
    }
}

export default eventpage
