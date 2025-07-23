import React from 'react'
// import '../index.css'
import Hero from '../components/Hero.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Slider from '../components/Slider.jsx'
import ContactUs1 from '../components/ContactUs1.jsx'
import Footer from '../components/Footer.jsx'
import Services from '../components/ServicesH.jsx'

const App = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Services />
      <Testimonials />
      <ContactUs1 />
      <Footer />
    </div>
  )
}

export default App



