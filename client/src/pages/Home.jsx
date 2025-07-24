import React from 'react'
// import '../index.css'
import Hero from '../components/Hero.jsx'
import Testimonials from '../components/Testimonials.jsx'
import HomeServiceSlider from '../components/HomeServiceSlider.jsx'
import ContactUs from '../components/ContactUs.jsx'
import Footer from '../components/Footer.jsx'
import Services from '../components/ServicesH.jsx'

const App = () => {
  return (
    <div>
      <Hero />
      <HomeServiceSlider />
      <Services />
      <Testimonials />
      <ContactUs />
      
    </div>
  )
}

export default App



