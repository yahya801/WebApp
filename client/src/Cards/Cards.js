import React, { Component } from 'react'
import Card from "./NewCard";

import img1 from "../assets/conference.jpg";
import img2 from "../assets/dj-party.jpg";
import img3 from "../assets/concert.jpg";
import CardImg from 'react-bootstrap/CardImg';

export class Cards extends Component {
    constructor(props){
        super(props)

    }

    render() {

        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc = {img1} title = "Conference"/>

                    </div>
                    <div className="col-md-4">
                        <Card imgsrc = {img2} title = "DJ Party"/>
                       
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc = {img3} title = "Concert"/>
                       
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc = {img3} title = "Concert"/>
                       
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc = {img3} title = "Concert"/>
                       
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc = {img3} title = "Concert"/>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
