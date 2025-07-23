import React from "react";
import Spline from "@splinetool/react-spline";

const ContactUs = () => {
  return (
    <div
      className="contact-section"
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        background: "linear-gradient(to bottom, #93CCFA, #E3F1FF)", // Matching the 3D section bg
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
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
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="What do you have in mind?"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-pill px-4 mt-4"
                style={{ backgroundColor: "#007bff" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - 3D Object */}
          {/* <div className="col-lg-6 p-0" style={{ background: "linear-gradient(to right, #c0e5ff, #eaf6ff)" }}>
          <div className="spline-wrapper" style={{ width: "100%", height: "500px" }}>
            <Spline scene="https://prod.spline.design/xnDn5mOey7iOxzPV/scene.splinecode" />
          </div>
        </div> */}

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
