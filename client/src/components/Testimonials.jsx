import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Testimonials.css';

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
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our happy clients say about us</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000, // ⏱ 3 seconds pause on each slide
            disableOnInteraction: false,
          }}
          speed={1000} // Smooth transition
          grabCursor={true}
          allowTouchMove={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="p-4 bg-white rounded-3 shadow-sm h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-start mb-2">
                    {[...Array(t.stars)].map((_, idx) => (
                      <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FDB241" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568L24 9.75l-6 5.845 1.417 8.255L12 19.771 4.583 23.85 6 15.595 0 9.75l8.332-1.595z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted">“{t.quote}”</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={t.img} className="rounded-circle" width="44" height="44" alt="avatar" />
                  <div className="ms-2 text-start">
                    <strong>{t.name}</strong>
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
