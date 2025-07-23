import React from 'react';
import './About.css'
import aboutImg from '../assets/about-image.png'; // Replace with your actual image

const About = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3">About Bharat Digital Limited</h2>
          <p className="text-muted">
            Bharat Digital Limited (BDL) is an innovative technology company that empowers businesses with end-to-end digital solutions. 
            We specialize in transforming ideas into scalable digital products and experiences that drive growth and impact.
          </p>
          <p className="text-muted">
            With a team of experienced professionals and creative thinkers, BDL offers services ranging from web development and branding 
            to advanced IT solutions tailored for the digital age.
          </p>
          <p className="text-muted">
            Our mission is to bridge the gap between businesses and modern technology through thoughtful design, clean code, 
            and a commitment to excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 text-center">
          <img 
            src={aboutImg} 
            alt="About Bharat Digital Limited" 
            className="img-fluid rounded shadow-sm" 
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
