import React, { Component } from 'react'
import {Link } from 'react-router-dom';


export class Lougout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("id")
    }
    async componentWillMount(){
        window.location = `/`
    }
    render() {
        return (
            <div>
               
                {/* <Link to="/"> Login in Again</Link> */}
                
            </div>
        )
    }
}

export default Lougout
