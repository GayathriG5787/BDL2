import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section bg-light" id="contact">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          
          {/* Left: Contact Form */}
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

          {/* Right: Google Map */}
          <div className="col-lg-6">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19848.08846334991!2d0.03509619540442071!3d51.54969623973179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUnit%201-I%2C%20Romford%20Road%2C%20London%2C%20England%2C%20E12%206BT!5e0!3m2!1sen!2sin!4v1753272372316!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow-sm"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
