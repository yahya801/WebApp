  
import React, { Component } from 'react'
import {Link, Router} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Slider from './slider';
import Coupons from './Layout/coupons';

import './home.css';


export class home extends Component {
    render() {
        return (          
                <Container>
                    <Jumbotron>
                        <h2> Welcome To Event Brite! </h2>
                        <p> Eventbrite is a global platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. From music festivals, marathons, conferences, community rallies, and fundraisers, to gaming competitions and air guitar contests. Our mission is to bring the world together through live experiences.</p>
                    </Jumbotron>
                    <Row className = "show-container text-center">
                        <h3 class= "text-right">Popular Events</h3>
                        <Col>
                        <Cards/>
                        </Col>

                    </Row>
                    <Coupons/>

                </Container>
                
        )
    }
}

export default home