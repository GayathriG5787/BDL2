import React from 'react';
import CardSlider from '../components/CardSlider.jsx';
import AboutBDL from '../components/AboutBDL.jsx';
import Footer from '../components/Footer.jsx'
import WhatWeDo from '../components/WhatWeDo.jsx';

const About = () => {
  return (
    <div>
      <CardSlider />
      <AboutBDL />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default About;
