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
        { path: "/1", text: "Page 1", isActive: false },
        { path: "/2", text: "Page 2", isActive: false },
        { path: "/3", text: "Page 3", isActive: false },
        { path: "/4", text: "Page 4", isActive: false }
      ]
    };
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i === j;
    }
    this.setState({ links: links });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <Link className="navbar-brand" to="/">
            Eventbrite
          </Link>

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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav">
              <ul className="navbar-nav">
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
            <div class="navbar-nav ml-auto">
              <a href="/login" class="nav-item nav-link">
                Login/Register
              </a>
            </div>
            <div>
              <form class="form-inline my-2 ">
                <input
                  class="form-control mr-sm-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
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
