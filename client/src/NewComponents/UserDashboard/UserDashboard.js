import React, { Component } from 'react'
import Tab from './tabs'; 
import Header from './pageheader';


export default class UserDashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Tab/>
                
            </div>
        )
    }
}
