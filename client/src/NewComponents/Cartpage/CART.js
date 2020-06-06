import React, { Component } from 'react'
import PageHeader from './pageheader'
import Cart from './usercardblock'
import Footer from "../footer"

export class CART extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <Cart />
                <Footer />
                
            </div>
        )
    }
}

export default CART
