import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-black text-white py-5">
      <div className="container text-center">
        <h1 className="mb-4">Welcome to Bharat Digital Limited</h1>

        {/* Spline 3D Model Embed */}
        <iframe 
          src='https://my.spline.design/genkubgreetingrobot-mgH766IEmn7ru0bWJMA9uFmF/' 
          frameBorder='0' 
          width='100%' 
          height='100%' 
          title="3D Model"
        ></iframe>
      </div>
    </section>
  );
};

export default HeroSection;
