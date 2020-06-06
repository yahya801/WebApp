import axios from "axios";
import React, { Component } from 'react'
import BookingCard from './BookingCard';


export default class Cards extends Component {
    constructor(props){
        super(props);

        this.state = {
            userid: localStorage.getItem("id"),
            BookedEvents: []
        }


        
    }

    async componentWillMount() {

    
        axios.get(`http://localhost:3000/booking/bookedevent`, {
        params: { userid: this.state.userid },
      })
          .then((response) => {
            console.log(response.data);
            console.log("abccccddd")
            this.setState({ BookedEvents: response.data.cartevents });
            console.log(this.state.BookedEvents);

            this.setState = (
                {

                }
            )
          });
      }



    render() {
   return (
            <div>
                <div className = "container">
                    <div className = "row">
                        {this.state.BookedEvents.map(BookedEvents => (
                            <div className="justify-content">
                                <div className='col-sm-4'>
                                    <BookingCard 
                                    title={BookedEvents.eventname} 
                                    price = {BookedEvents.totalprice}
                                    normalticket = {BookedEvents.normalticket}
                                    vipticket = {BookedEvents.vipticket}
                                    bookingdate = {BookedEvents.bookingdate} />
                                </div>
                            
                            </div>

                        )) }

                    </div>

                </div>
                
            </div>
        )
    }
}
