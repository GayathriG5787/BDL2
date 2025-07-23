import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg glassy-navbar fancy-navbar fixed-top shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="BDL Logo" height="50" className="me-2" />
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/careers">Careers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Right spacer */}
        <div className="d-none d-lg-block" style={{ width: "60px" }}></div>
      </div>
    </nav>
  );
};

export default Navbar;
