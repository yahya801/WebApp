import React, { Component } from 'react'
import Tab from './tabs'; 
import Header from './pageheader';
import Footer from "../footer"


export default class UserDashboard extends Component {
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
