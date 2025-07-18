import React from 'react';
import logo from '../assets/logo.png'; // replace with your actual logo path
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg glassy-navbar fancy-navbar fixed-top shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={logo} alt="BDL Logo" height="50" className="me-2 rounded-circle" />
        </a>

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
              <a className="nav-link custom-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#careers">Careers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#contact">Contact Us</a>
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

