import React, { Component } from 'react'
import {Link, Router} from 'react-router-dom';
import Slider from '../slider';
import Carousel from './carousel'

export default class about extends Component {
    render() {
        return (
            <div>
                <Slider/>
               
                {/* <Carousel/> */}
            </div>
        )
    }
}
