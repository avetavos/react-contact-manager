import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-3">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand mb-0 h1">
            <span className="text-danger">Contact</span> Manager
          </Link>
          <Link to="/about" className="text-light navbar-brand">
            About
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
