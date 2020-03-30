import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: "10%" }}
        >
          <ul className="navbar-nav mr-sm-2">
            <li className="nav-item">
              <a href="./Homepage.html" className="nav-link">
                Mobile
              </a>
            </li>
            <li className="nav-item">
              <a href="./Homepage.html" className="nav-link">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a href="./Homepage.html" className="nav-link">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a href="./Homepage.html" className="nav-link">
                Electronics
              </a>
            </li>

            <li className="nav-item">
              <a href="./Homepage.html" className="nav-link">
                Home & kitchens
              </a>
            </li>
            <li className="nav-item">
              <a href="./Homepage.html" className="nav-link">
                Baby & Kids
              </a>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            style={{ marginLeft: "1%" }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "70%" }}
            ></input>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <a
            class="btn btn-primary btn-sm"
            href="#"
            role="button"
            style={{ marginLeft: "5%", width: "10%" }}
          >
            Login
          </a>
          <a
            class="btn btn-primary btn-sm"
            href="#"
            role="button"
            style={{ marginLeft: "1.5%", width: "10%" }}
          >
            Sign-Up
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
