import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Beach from "../assets/beach.jpg";
import Travel from "../assets/travel.jpg";
import Waterfall from "../assets/waterfall.jpg";

 class slider extends Component {
    render() {
        return (
            <div>

                <div id = "MagicCarousel" class = "carousel slide" data-ride = "carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                        </ol>
                    <div class = "carousel-inner">
                        <div class = "carousel-item active">
                            <img class = "d-block" src = {Beach} alt = "First Image"/>
                            <div class = "carousel-caption">
                                <h3>Beach Fun</h3>
                                <p>Fun Fun Fun</p>
                            </div>
                        </div>
                        <div class = "carousel-item">
                            <img class = "d-block" src = {Travel} alt = "2nd Image"/>
                            <div class = "carousel-caption">
                                <h3>Travel Fun</h3>
                                <p>Fun Fun Fun</p>
                            </div>
                        </div>
                        <div class = "carousel-item">
                            <img class = "d-block" src = {Waterfall} alt = "Third Image"/>
                            <div class = "carousel-caption">
                                <h3>Waterfall Fun</h3>
                                <p>Fun Fun Fun</p>
                            </div>
                        </div>
                        

                    </div>
                    <a class="carousel-control-prev" href="#carouselFull" role="button" data-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#carouselFull" role="button" data-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="sr-only">Next</span>
       </a>
                </div>

            </div>
        )
    }
}

export default slider;
