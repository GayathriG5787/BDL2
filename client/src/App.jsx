import React from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Carousel from './components/Carousel.jsx'
import Carousel2 from './components/Carousel2.jsx'
import Carousel3 from './components/Carousel3.jsx'
import Testimonials from './components/Testimonials.jsx'
import Slider from './components/Slider.jsx'
import Carousel3D from './components/Carousel3D.jsx'
import Sli1 from './components/Voyage.jsx'
import RotatingCards from './components/RotatingCards.jsx'
import Serv from './components/Serv.jsx'
import Serv1 from './components/Serv1.jsx'
import MultiItemCarousel from './components/MultiItemCarousel.jsx'
import FruitCarousel from './components/FruitCarousel.jsx'
import Services from './components/Services.jsx'
import Testi from './components/Testi.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Slider />
      <Footer />

      {/* <Testi /> */}
      {/* <Carousel />
      <Carousel2 />
      <Carousel3 /> */}
      {/* <Carousel3D /> */}
      {/* <Serv1 /> */}
      {/* <MultiItemCarousel /> */}
      {/* <FruitCarousel /> */}
      {/* <Serv /> */}
      {/* <RotatingCards /> */}
      {/* <Sli1 /> */}
    </div>
  )
}

export default App