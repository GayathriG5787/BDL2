import React from 'react'
// import '../index.css'
import Hero from '../components/Hero.jsx'
import Testimonials from '../components/Testimonials.jsx'
import HomeServiceSlider from '../components/HomeServiceSlider.jsx'
import ContactUs from '../components/ContactUs.jsx'
import Footer from '../components/Footer.jsx'
import ServicesHome from '../components/ServicesHome.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeServiceSlider />
      <ServicesHome />
      <Testimonials />
      <ContactUs />
      
    </div>
  )
}

export default Home



