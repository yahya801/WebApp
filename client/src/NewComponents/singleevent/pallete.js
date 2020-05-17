import React, { Component } from "react";

export class pallete extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="tabs">
              <ul className="tabs-nav flex">
                <li
                  className="tab-nav flex justify-content-center align-items-center"
                  data-target="#tab_details"
                >
                  Details
                </li>
                <li
                  className="tab-nav flex justify-content-center align-items-center"
                  data-target="#tab_venue"
                >
                  Venue
                </li>
                <li
                  className="tab-nav flex justify-content-center align-items-center"
                  data-target="#tab_organizers"
                >
                  Organizers
                </li>
              </ul>
              <div className="tabs-container">
                <div id="tab_details" className="tab-content">
                  <div className="flex flex-wrap justify-content-between">
                    <div className="single-event-details">
                      <div className="single-event-details-row">
                        <label>Start:</label>
                        <p>June 17 @ 09:00 am</p>
                      </div>
                      <div className="single-event-details-row">
                        <label>End:</label>
                        <p>June 22 @ 07:30 am</p>
                      </div>
                      <div className="single-event-details-row">
                        <label>Price:</label>
                        <p>
                          $89 <span>Sold Out</span>
                        </p>
                      </div>
                      <div className="single-event-details-row">
                        <label>Categories:</label>
                        <p>Festivals</p>
                      </div>
                      <div className="single-event-details-row">
                        <label>Tags:</label>
                        <p>
                          <a href="#">festivals</a>, <a href="#">music</a>,{" "}
                          <a href="#">concert</a>
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div id="tab_venue" className="tab-content">
                  <p>
                    Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  </p>
                </div>
                <div id="tab_organizers" className="tab-content">
                  <p>
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                    faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                    nibh. Donec sodales sagittis magna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default pallete;
