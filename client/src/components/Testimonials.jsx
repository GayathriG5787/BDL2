import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Freelance React Developer",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    stars: 5
  },
  {
    name: "Jacob Jones",
    role: "Digital Marketer",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    quote: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    stars: 5
  },
  {
    name: "Jenny Wilson",
    role: "Graphic Designer",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    quote: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
    stars: 5
  },
  {
    name: "Albert Flores",
    role: "UX Designer",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png",
    quote: "Truly remarkable! It transformed the way we work and communicate with our customers. Highly recommended!",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="" style={{paddingBottom: '5rem'}}>
      <div className="container text-center">
        <h2 className="testimonials-title fw-bold pb-5">Our happy clients say about us</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000, // ⏱ 3 seconds pause on each slide
            disableOnInteraction: false,
          }}
          speed={500} // Smooth transition
          grabCursor={true}
          allowTouchMove={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="h-130 my-2">
            <div
              className="testimonial-card my-2 h-100 d-flex flex-column justify-content-between text-start"
              style={{
                minHeight: "320px", // or any height you prefer
                padding: "2rem",
                gap: "1.5rem",
              }}
            >

              {/* Star Rating + Quote */}
              <div>
                <div className="d-flex mb-5">
                  {[...Array(t.stars)].map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#FDB241"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.845 1.417 8.255L12 19.771 4.583 23.85 6 15.595 0 9.75l8.332-1.595z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted small mb-0" style={{ lineHeight: "1.7", fontSize: "17px" }}>
                  “{t.quote}”
                </p>
              </div>

              {/* Avatar + Info */}
              <div className="d-flex align-items-center mt-3">
                <img
                  src={t.img}
                  className="rounded-circle"
                  width="44"
                  height="44"
                  alt={t.name}
                />
                <div className="ms-3 text-primary">
                  <div className="fw-bold">{t.name}</div>
                  <div className="text-muted small">{t.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
