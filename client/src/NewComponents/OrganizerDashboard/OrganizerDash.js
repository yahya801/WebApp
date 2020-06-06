import React, { Component } from 'react'
import Header from './pageheader'
import Tab from './tabs'
import Footer from "../footer"




export default class OrganizerDash extends Component {
    render() {
        return (
            <div>
              <Header/> 
              <Tab/>
              <Footer />
                
            </div>
        )
    }
}



