import React, { Component } from 'react'

export class Findform extends Component {
    render() {
        return (
            <div>
                {
  /* Find Form */
}
<div className="find">
  {/* Image by https://unsplash.com/@garciasaldana_ */}
  <div
    className="find_background parallax-window"
    data-parallax="scroll"
    data-image-src="images/find.jpg"
    data-speed="0.8"
  />
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="find_title text-center">
          Find the Adventure of a lifetime
        </div>
      </div>
      <div className="col-12">
        <div className="find_form_container">
          <form
            action="#"
            id="find_form"
            className="find_form d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-between justify-content-start flex-wrap"
          >
            <div className="find_item">
              <div>Destination:</div>
              <input
                type="text"
                className="destination find_input"
                required="required"
                placeholder="Keyword here"
              />
            </div>
            <div className="find_item">
              <div>Adventure type:</div>
              <select
                name="adventure"
                id="adventure"
                className="dropdown_item_select find_input"
              >
                <option>Categories</option>
                <option>Categories</option>
                <option>Categories</option>
              </select>
            </div>
            <div className="find_item">
              <div>Min price</div>
              <select
                name="min_price"
                id="min_price"
                className="dropdown_item_select find_input"
              >
                <option>&nbsp;</option>
                <option>Price</option>
                <option>Price</option>
              </select>
            </div>
            <div className="find_item">
              <div>Max price</div>
              <select
                name="max_price"
                id="max_price"
                className="dropdown_item_select find_input"
              >
                <option>&nbsp;</option>
                <option>Price</option>
                <option>Price</option>
              </select>
            </div>
            <button className="button find_button">Find</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>;

            </div>
        )
    }
}

export default Findform
