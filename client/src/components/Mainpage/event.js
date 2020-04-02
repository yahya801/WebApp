import React, { Component } from 'react'
import axios from 'axios'


export class event extends Component {
    state ={
        loading: true,
        event: null
    }
    componentDidMount(){
        axios.get(`http://localhost:3000/event/`)
        .then(res => {
      //    const event = res.data[0];
       //  this.setState({ event});
      
        console.log(res.data.events[0])

    })
}
    
    // async componentDidMount(){
    //     const url = "http://localhost:3000/user/event";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //  //   this.setState({event: data.results[0]})
    //     console.log(data.)

    // }
    render() {
        return (
            <div>
                <h1>{event}</h1>
            </div>
        )
    }
}

export default event
