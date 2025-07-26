import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero.jsx';
import Testimonials from '../components/Testimonials.jsx';
import HomeServiceSlider from '../components/HomeServiceSlider.jsx';
import ContactUs from '../components/ContactUs.jsx';
import ServicesHome from '../components/ServicesHome.jsx';
import './Home.css'

const Spline = lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeServiceSlider />

      {/* 💡 Fixed Spline background rendered only once */}
      <Suspense fallback={<div className="spline-loading"></div>}>
        <div className="spline-fixed-background-wrapper">
          <Spline
            className="spline-fixed-background"
            scene="https://prod.spline.design/dBxyhwjxOZcOqHwL/scene.splinecode"
          />
        </div>
      </Suspense>

      {/* ✅ Foreground content that scrolls OVER the fixed background */}
      <div className="spline-section-wrapper">
        <div className="spline-content-overlay">
          <ServicesHome />
          <Testimonials />
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default Home;
