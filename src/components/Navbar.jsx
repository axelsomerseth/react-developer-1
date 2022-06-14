import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/counter" className="nav-link">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list-albums" className="nav-link">
                List Albums
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list-albums-class" className="nav-link">
                List Albums Class
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list-posts" className="nav-link">
                List Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
