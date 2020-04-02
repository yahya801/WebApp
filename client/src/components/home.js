  
import React, { Component } from 'react'
import {Link, Router} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import Cards from '../Cards/Cards';

import './home.css';


export class home extends Component {
    render() {
        return (          
                <Container>
                    <Jumbotron>
                        <h2> Welcome To Event Brite! </h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at, corporis consequatur cupiditate temporibus iste impedit ullam nostrum. Nulla, magnam?</p>
                    </Jumbotron>
                    <Row className = "show-container text-center">
                        <h3 class= "text-right">Popular Events</h3>
                        <Col>
                        <Cards/>
                        </Col>

                    </Row>

                </Container>
                
        )
    }
}

export default home