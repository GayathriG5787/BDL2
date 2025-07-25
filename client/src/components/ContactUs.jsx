import React from "react";
import "./ContactUs.css";
import map from '../assets/map.png'

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
            <div className="col-lg-6 text-center">
            <a href="https://www.google.com/maps/search/Unit+1-I,+Romford+Road,+London,+England,+E12+6BT/@51.549696,0.035096,13z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <img 
                src={map} 
                alt="Contact Visual" 
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "400px", cursor: "pointer" }}
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
