// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';

import WebsiteDevelopment from './pages/WebsiteDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import ITSupport from './pages/ITSupport';
import SocialMedia from './pages/SocialMedia';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/it-support" element={<ITSupport />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
