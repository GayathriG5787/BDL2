import React from 'react';
import CardSlider from '../components/CardSlider.jsx';
import AboutBDL from '../components/AboutBDL.jsx';
import CoreValues from '../components/CoreValues.jsx';
import MissionVisionTeam from '../components/MissionVisionTeam.jsx';
import ServicesAbout from "../components/ServicesAbout.jsx"

const About = () => {
  return (
    <div>
      <CardSlider />
      <AboutBDL />
      <CoreValues />
      <MissionVisionTeam />
      <ServicesAbout />
      
    </div>
  );
};

export default About;
