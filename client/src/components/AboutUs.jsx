import React from "react"; // Optional: to add custom styles

const AboutUs = () => {
  return (
    <section className="about-us-section d-flex align-items-center" style={{ minHeight: "100vh", background: "linear-gradient(to right, #eef5fc, #e6f0f8)" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold text-dark">About Bharat Digital Limited</h2>
            <p className="lead text-secondary mt-3">
              Bharat Digital Limited is a UK-based IT consultancy and digital services company headquartered in London. Incorporated on 9 August 2024, we specialize in delivering innovative technology solutions across sectors—blending engineering design, cloud, software, cybersecurity, and web services to help businesses thrive in the digital age
            </p>
            <p className="lead text-secondary mt-3">
              At Bharat Digital, we believe in making digital transformation accessible, trusted, and sustainable. Whether you're a startup or enterprise, our team is here to help you navigate the digital landscape with confidence.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="../assets/about.png" // Replace with your actual image path
              alt="About Bharat Digital"
              className="img-fluid rounded"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
