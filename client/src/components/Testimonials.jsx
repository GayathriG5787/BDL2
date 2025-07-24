import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import { Autoplay } from 'swiper/modules';
import './Testimonials.css';

const Testimonials = () => {
  useEffect(() => {
    // Swiper modules are already passed in React Swiper
  }, []);

  return (
    <main>
  <section>
    <h1 className="fs-1 fw-bold">What our customers say</h1>
    <Swiper
      className="swiper"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slideToClickedSlide={true}
      speed={1000}
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: true, }}
      keyboard={{ enabled: true }}
      mousewheel={{ thresholdDelta: 70 }}
      style={{ paddingInline: '4rem' }}
      slidesPerView="auto"
      spaceBetween={30} 
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel, Autoplay]}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1560: { slidesPerView: 3 },
      }}
    >
              <SwiperSlide className="swiper-slide testimonial-slide">
        <div>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" className="client-photo" />
          <p>"Bharat Digital transformed our online presence. Their team is professional and results-driven!"</p>
          <h3>— John Doe, CEO of TechCorp</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide testimonial-slide">
        <div>
          <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Client 2" className="client-photo" />
          <p>"We've seen a 200% increase in engagement since partnering with them."</p>
          <h3>— Jane Smith, Marketing Head at MarketMax</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide testimonial-slide">
        <div>
          <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Client 3" className="client-photo" />
          <p>"Their attention to detail and customer support is unmatched. We are impressed!"</p>
          <h3>— Ali Khan, Director at NextGen</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide testimonial-slide">
        <div>
          <img src="https://randomuser.me/api/portraits/women/29.jpg" alt="Client 4" className="client-photo" />
          <p>"The best digital marketing team we've ever worked with. Highly recommended!"</p>
          <h3>— Lisa Chen, Founder of BloomNow</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide testimonial-slide">
        <div>
          <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Client 5" className="client-photo" />
          <p>"Thanks to Bharat Digital, our software project was completed ahead of schedule and under budget."</p>
          <h3>— Michael Scott, Operations Manager at DunderTech</h3>
        </div>
      </SwiperSlide>

      </Swiper>
      <img
        src=""
        alt=""
        className="bg"
      />
      <img
        src=""
        alt=""
        className="bg2"
      />
      </section>
    </main>
  );
};

export default Testimonials;
