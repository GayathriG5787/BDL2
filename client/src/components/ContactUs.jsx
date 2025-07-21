import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-section" style={{
        paddingTop: "5rem",
        paddingBottom: "5rem"
    }}>
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left - Contact Form */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Let's talk</h2>
            <p className="text-muted mb-5">
              We’d love to hear from you! Send us your message and we'll get back to you shortly.
            </p>

            <form>
              <div className="row g-4">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control " placeholder="Last Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control " placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control " placeholder="Phone Number" />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="What do you have in mind?"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary rounded-pill px-4 mt-4" style={{
    backgroundColor: "#007bff"}} >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
