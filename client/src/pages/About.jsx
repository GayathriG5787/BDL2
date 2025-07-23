import React from 'react';
import './About.css';
import aboutImg from '../assets/about-image.png';
import CardSlider from '../components/CardSlider';

const About = () => {
  return (
    <div>
      <CardSlider />

      <div className="about-container-fluid py-5 mt-5">
        {/* Header */}
        <div className="about-row mb-5 text-center">
          <div className="about-col">
            <h2 className="about-heading fw-bold">About BDL</h2>
          </div>
        </div>

        {/* Image + Intro */}
        <div className="about-row align-items-center mb-5">
          {/* Text Section */}
          <div className="about-col-lg-6 mb-4 mb-lg-0">
            <p className="about-text text-muted">
              Bharat Digital Limited (BDL) is a forward-thinking IT company dedicated to delivering transformative digital products and solutions.
            </p>
            <p className="about-text text-muted">
              From startups to enterprises, we partner with organizations to build powerful web platforms, engaging user interfaces, and secure IT systems that scale.
            </p>
          </div>

          {/* Image Section */}
          <div className="about-col-lg-6 text-center">
            <img
              src={aboutImg}
              alt="About Bharat Digital Limited"
              className="about-img img-fluid rounded shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="about-row mb-5">
          <div className="about-col-md-4 mb-4">
            <h5 className="fw-bold">Our Mission</h5>
            <p className="about-text text-muted">
              To bridge the gap between businesses and modern technology through meaningful design, intelligent development, and a commitment to digital excellence.
            </p>
          </div>
          <div className="about-col-md-4 mb-4">
            <h5 className="fw-bold">Our Vision</h5>
            <p className="about-text text-muted">
              To become a globally trusted digital partner driving innovation and transformation across industries.
            </p>
          </div>
          <div className="about-col-md-4 mb-4">
            <h5 className="fw-bold">Core Values</h5>
            <ul className="about-text text-muted ps-3 mb-0">
              <li>Innovation & Creativity</li>
              <li>Integrity & Transparency</li>
              <li>Customer First Approach</li>
              <li>Teamwork & Collaboration</li>
              <li>Quality & Accountability</li>
            </ul>
          </div>
        </div>

        {/* Services Summary */}
        <div className="about-row mb-5">
          <div className="about-col">
            <h4 className="fw-bold text-center mb-4">What We Do</h4>
            <div className="about-row text-center">
              <div className="about-col-md-3 mb-3">
                <h6 className="fw-semibold">Web Development</h6>
                <p className="about-text text-muted">Responsive and scalable websites built with the latest tech stack.</p>
              </div>
              <div className="about-col-md-3 mb-3">
                <h6 className="fw-semibold">Branding & Design</h6>
                <p className="about-text text-muted">Creating visual identities that leave lasting impressions.</p>
              </div>
              <div className="about-col-md-3 mb-3">
                <h6 className="fw-semibold">IT Solutions</h6>
                <p className="about-text text-muted">Custom enterprise solutions for automation, security, and integration.</p>
              </div>
              <div className="about-col-md-3 mb-3">
                <h6 className="fw-semibold">Digital Marketing</h6>
                <p className="about-text text-muted">Strategies to boost online visibility and engagement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-row mb-5">
          <div className="about-col text-center">
            <h4 className="fw-bold mb-3">Why Choose BDL?</h4>
            <p className="about-text text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We don’t just deliver services — we build relationships. With a focus on innovation, transparency, and results, BDL ensures every solution aligns with your business goals.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="about-row text-center">
          <div className="about-col">
            <a href="/contact" className="about-btn btn btn-primary px-4 py-2 rounded-pill">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
