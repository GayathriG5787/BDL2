import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light border-top border-secondary">
      <div className="container py-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white">Bharat Digital Ltd.</h5>
            <p className="text-light small">
              Providing end-to-end digital solutions for modern businesses to grow and thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/services" className="text-decoration-none text-light">Services</a></li>
              <li><a href="/careers" className="text-decoration-none text-light">Careers</a></li>
              <li><a href="/about" className="text-decoration-none text-light">About</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-white mb-3">Get in Touch</h6>
            <ul className="list-unstyled text-light small">
              <li>Email: info@bharatdigital.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Bengaluru, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-light small py-3 border-top border-secondary">
        &copy; {new Date().getFullYear()} Bharat Digital Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
