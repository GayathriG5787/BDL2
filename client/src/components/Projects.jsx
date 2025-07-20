import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    // Swiper modules are already passed in React Swiper
  }, []);

  return (
    <main>
      <div>
        <span>discover</span>
        <h1>Our Projects</h1>
        <hr />
        <p>
          At Bharat Digital Limited, we deliver comprehensive digital services including software and website development, digital marketing, and IT support. We also specialize in social media management to boost your online presence and engagement.
        </p>
        <a href="#">Explore</a>
      </div>
      <Swiper
        className="swiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slideToClickedSlide={true}
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        pagination={{ clickable: true }}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1560: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide className="swiper-slide swiper-slide--one">
          <div>
            <h2>Website Development</h2>
            <p>
              We design and develop responsive, user-friendly websites that represent your brand effectively.
            </p>
            <a href="" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--two">
          <div>
            <h2>Digital Marketing</h2>
            <p>
              We help you grow your business online through targeted SEO, PPC, and content strategies.
            </p>
            <a href="" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--three">
          <div>
            <h2>Social Media Management</h2>
            <p>
              We manage and optimize your social media presence to increase reach and engagement.
            </p>
            <a href="" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--four">
          <div>
            <h2>Software Development</h2>
            <p>
              We build customized software solutions tailored to your business goals and operations.
            </p>
            <a href="" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--five">
          <div>
            <h2>IT Support</h2>
            <p>
              We provide reliable IT support to ensure your systems run smoothly and securely.
            </p>
            <a href="" target="_blank" rel="noreferrer">
              explore
            </a>
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
    </main>
  );
};

export default Projects;
