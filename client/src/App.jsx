import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Carousel from './components/Carousel.jsx'
import Carousel2 from './components/Carousel2.jsx'
import Carousel3 from './components/Carousel3.jsx'
import Carousel4 from './components/Carousel4.jsx'
import Slider from './components/Slider.jsx'
import Sli1 from './components/Voyage.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Carousel />
      <Carousel2 />
      <Carousel3 /> */}
      <Carousel4 />
      {/* <Slider />
      <Sli1 /> */}
    </div>
  )
}

export default App