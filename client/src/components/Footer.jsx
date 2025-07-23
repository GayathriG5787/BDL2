import React from 'react';
import logoF from '../assets/logoF.png'
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
      <div className="container py-5">
        <div className="row text-start align-items-start">
          {/* Company Info */}
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logoF} alt="BDL Logo" height="35" className="me-2" />
              <h6 className="fw-semibold mb-0">BHARAT DIGITAL LTD.</h6>
            </div>
            <p className="small mb-0" style={{ width: '300px' }}>
              Providing end-to-end digital solutions for modern businesses to grow and thrive.
            </p>
          </div>


          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2"><a href="/" className="text-decoration-none text-white">Home</a></li>
              <li className="mb-2"><a href="/services" className="text-decoration-none text-white">Services</a></li>
              <li className="mb-2"><a href="/careers" className="text-decoration-none text-white">Careers</a></li>
              <li className="mb-2"><a href="/about" className="text-decoration-none text-white">About</a></li>
              <li><a href="/contact" className="text-decoration-none text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <ul className="list-unstyled small mb-3">
              <li className="d-flex align-items-center mb-2">
                <FaPhoneAlt className="me-2 text-primary" />
                <span className="text-white">+1258 3258 5679</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2 text-primary" />
                <span className="text-white">hello@workik.com</span>
              </li>
              <li className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <span className="text-white">102 street, y cross 485656</span>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <a href="#" className="text-primary"><FaGoogle /></a>
              <a href="#" className="text-primary"><FaTwitter /></a>
              <a href="#" className="text-primary"><FaInstagram /></a>
              <a href="#" className="text-primary"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center small py-3 border-top border-secondary">
        &copy; {new Date().getFullYear()} Bharat Digital Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
