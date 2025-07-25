import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import contactImage from "../assets/contact-image1.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container py-5">
        <div className="row g-5 align-items-center">

          {/* Contact Form on Left */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Let's talk</h2>
            <p className="text-muted mb-4 fs-6">
              We'd love to hear from you. Fill out the form and we'll be in touch shortly.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control shadow-sm" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control shadow-sm" placeholder="Last Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control shadow-sm" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control shadow-sm" placeholder="Phone Number" />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control shadow-sm"
                    rows="4"
                    placeholder="What do you have in mind?"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-pill px-4 py-2 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image on Right */}
          <div className="col-lg-6 text-center">
            <img
              src={contactImage}
              alt="Contact"
              className="img-fluid contact-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
