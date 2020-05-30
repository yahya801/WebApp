import React, { Component } from "react";
import EventSearchBar from "./eventsearch";
import Eventcard from "./searchcard";
export class searchcontainer extends Component {
  constructor(props) {
    super(props);
    // let loading = true;
    var url_string = window.location.href;
    var url = new URL(url_string);
    // console.log(url.pathname)
    this.state = {
      search: false,
      path: url.pathname,
    };
    // console.log(this.state.path)
  }
  render() {
    let search = this.state.search;
    let searchevent;
    if (this.state.path == "/search") {
      //   console.log("jlkjnvkhb");
      search = true;
      searchevent = <Eventcard />;
    }
    var SEARCHEVENT = <div>{searchevent}</div>;

    return (
      <div>
        <EventSearchBar />
        {search ? SEARCHEVENT : null}
      </div>
    );
  }
}

export default searchcontainer;
