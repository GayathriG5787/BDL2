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
        <div className="row text-start">
          {/* 1. Company Info */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logoF} alt="BDL Logo" height="35" className="me-2" />
              <h6 className="fw-semibold mb-0">BHARAT DIGITAL LTD.</h6>
            </div>
            <p className="small mb-0">
              Providing end-to-end digital solutions for modern businesses to grow and thrive.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="col-md-3 mb-4">
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
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <ul className="list-unstyled small mb-3">
              <li className="d-flex align-items-center mb-2">
                <FaPhoneAlt className="me-2 text-primary" />
                <span>+1258 3258 5679</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2 text-primary" />
                <span>hello@workik.com</span>
              </li>
              <li className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <span>102 street, y cross 485656</span>
              </li>
            </ul>
            <div className="d-flex gap-3">
              <a href="#" className="text-primary"><FaGoogle /></a>
              <a href="#" className="text-primary"><FaTwitter /></a>
              <a href="#" className="text-primary"><FaInstagram /></a>
              <a href="#" className="text-primary"><FaFacebookF /></a>
            </div>
          </div>

          {/* 4. Google Map */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Our Location</h6>
            <div className="map-responsive">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19848.08846334991!2d0.03509619540442071!3d51.54969623973179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUnit%201-I%2C%20Romford%20Road%2C%20London%2C%20England%2C%20E12%206BT!5e0!3m2!1sen!2sin!4v1753272372316!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="text-center small py-3 border-top border-secondary">
          &copy; {new Date().getFullYear()} Bharat Digital Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
