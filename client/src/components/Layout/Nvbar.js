import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
  render() {
    return (
      <li className={"nav-item " + (this.props.isActive ? "active" : "")}>
        <Link
          className="nav-link"
          to={this.props.path}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </Link>
      </li>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: "/1", text: "Home", isActive: false },
        { path: "/2", text: "About", isActive: false },
        { path: "/3", text: "Create Event", isActive: false },
        { path: "/4", text: "Likes", isActive: false }
      ]
    };
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i == j;
    }
    this.setState({ links: links });
  }

  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light  bg-light justify-content-between">
          <Link className="navbar-brand" to="/">
            EventBrite        </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success ml-auto" type="submit"> Search </button>
          </form>





          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {this.state.links.map((link, i) => (
                <NavLink
                  path={link.path}
                  text={link.text}
                  isActive={link.isActive}
                  key={link.path}
                  onClick={() => this.handleClick(i)}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export class Nvbar extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Nvbar;