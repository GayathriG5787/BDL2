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

        {/* Mobile Toggler */}
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

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">Home</Link>
            </li>

            {/* Services with dropdown */}
            <li className="nav-item dropdown hover-dropdown">
              <span className="nav-link dropdown-toggle custom-link" id="servicesDropdown" role="button">
                Services
              </span>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/website-development">Website Development</Link></li>
                <li><Link className="dropdown-item" to="/digital-marketing">Digital Marketing</Link></li>
                <li><Link className="dropdown-item" to="/software-development">Software Development</Link></li>
                <li><Link className="dropdown-item" to="/it-support">IT Support</Link></li>
                <li><Link className="dropdown-item" to="/social-media">Social Media Management</Link></li>
              </ul>
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

        {/* Spacer on right */}
        <div className="d-none d-lg-block" style={{ width: "60px" }}></div>
      </div>
    </nav>
  );
};

export default Navbar;
