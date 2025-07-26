import React from 'react';
import logoF from '../assets/logoF.png';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGoogle
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white border-top border-secondary" style={{ backgroundColor: '#000' }}>
      <div className="container pt-5">
        <div className="row text-center text-md-start justify-content-between align-items-start">
          {/* 1. Company Info */}
          <div className="col-md-4 col-lg-3 mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <img src={logoF} alt="BDL Logo" height="35" className="me-2" />
              <h6 className="fw-semibold mb-0">BHARAT DIGITAL</h6>
            </div>
            <p className="small mb-0">
              Providing end-to-end digital solutions for modern businesses to grow and thrive.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="col-md-4 col-lg-3 mb-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2"><a href="/" className="text-decoration-none text-white">Home</a></li>
              <li className="mb-2"><a href="/services" className="text-decoration-none text-white">Services</a></li>
              <li className="mb-2"><a href="/careers" className="text-decoration-none text-white">Careers</a></li>
              <li className="mb-2"><a href="/about" className="text-decoration-none text-white">About</a></li>
              <li><a href="/contact" className="text-decoration-none text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="col-md-4 col-lg-3 mb-4">
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <ul className="list-unstyled small mb-3">
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <FaPhoneAlt className="me-2 text-primary" />
                <span>+1258 3258 5679</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <FaEnvelope className="me-2 text-primary" />
                <span>hello@workik.com</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <span>102 street, y cross 485656</span>
              </li>
            </ul>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-primary"><FaGoogle /></a>
              <a href="#" className="text-primary"><FaTwitter /></a>
              <a href="#" className="text-primary"><FaInstagram /></a>
              <a href="#" className="text-primary"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        <div className="text-center small py-3 border-top border-secondary mt-3">
          &copy; {new Date().getFullYear()} Bharat Digital Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
