import React, { Component } from 'react'
import PageHeader from './checkoutheader'
import CheckoutForm from './checkoutform'
import Footer from "../footer"


export class CHECKOUT extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <CheckoutForm />
                <Footer />
                
            </div>
        )
    }
}

export default CHECKOUT
