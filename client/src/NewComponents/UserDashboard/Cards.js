import Card from './BookingCard';
import axios from "axios";
import React, { Component } from 'react'

export default class Cards extends Component {
    constructor(props){
        super(props);

        this.state = {
            userid: localStorage.getItem("id"),
            BookedEvents = [],
        }


        
    }

    async componentWillMount() {

    
        axios
          .get(`http://localhost:3000/eventbooking`)
          .then((response) => {
            console.log(response.data);
            this.setState({ BookedEvents: response.data.cartevents });
            console.log(this.state.Events);
          });
      }



    render() {
   return (
            <div>
                
            </div>
        )
    }
}
