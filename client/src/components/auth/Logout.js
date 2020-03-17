import React, { Component } from 'react'
import {Link } from 'react-router-dom';


export class Lougout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1> You have been logged out</h1> 
                <Link to="/"> Login in Again</Link>
                
            </div>
        )
    }
}

export default Lougout
