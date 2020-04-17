import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class coupons extends Component {
    render() {
        return (
            <div>
                <section class="specials">
<div class="container">
<div class="row justify-content-center">
<div class="col-xs-6 col-sm-12 col-md-12 col-lg-12 col-xl-6 text-center">
                    <h2>Sign Up For Coupons and Specials</h2>
                </div>
                <div class="d-none d-lg-block col-lg-12 col-xl-6">
                <form class="form-inline d-flex justify-content-center" action="contact.php" method="POST" enctype="multipart/form-data" role="form">
                <div class="form-group p-2">
                <label for="exampleInputName2"></label>
                            <input name="name" type="text" class="form-control" id="exampleInputName2" placeholder="Your Name"></input>
                </div>
                <div class="form-group p-2">
                <label for="exampleInputEmail2"></label>
                            <input name="email" type="email" class="form-control" id="exampleInputEmail2" placeholder="Your Email"></input>
                </div>
                <button type="submit" class="btn btn-outline-light">Get Specials</button>
                </form>
                </div>
                <div class="d-lg-none col-xs-12 col-sm-12 col-md-6">
                <form class="form" action="contact.php" method="POST" enctype="multipart/form-data" role="form">
                <div class="form-group">
                <label for="exampleInputName2"></label>
                <input name="name" type="text" class="form-control" id="exampleInputName2" placeholder="Your Name"></input>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail2"></label>
                <input name="email" type="email" class="form-control" id="exampleInputEmail2" placeholder="Your Email"></input>
                </div>
                <button type="submit" class="btn btn-outline-light">Get Specials</button>
                </form>
                </div>

</div>
</div>
</section>
            </div>
        )
    }
}
