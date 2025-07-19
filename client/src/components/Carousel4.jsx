import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import './Carousel4.css';

const Carousel4 = () => {
  useEffect(() => {
    // Swiper modules are already passed in React Swiper
  }, []);

  return (
    <main>
      <div>
        <span>discover</span>
        <h1>aquatic animals</h1>
        <hr />
        <p>
          Beauty and mystery are hidden under the sea. Explore with our
          application to know about Aquatic Animals.
        </p>
        <a href="#">download app</a>
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
            <h2>Jellyfish</h2>
            <p>
              Jellyfish and sea jellies are the informal common names given to the
              medusa-phase of certain gelatinous members of the subphylum Medusozoa,
              a major part of the phylum Cnidaria.
            </p>
            <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--two">
          <div>
            <h2>Seahorse</h2>
            <p>
              Seahorses are mainly found in shallow tropical and temperate salt
              water. They live in sheltered areas such as seagrass beds, estuaries,
              coral reefs, and mangroves.
            </p>
            <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--three">
          <div>
            <h2>Octopus</h2>
            <p>
              Octopuses inhabit various regions of the ocean, including coral reefs,
              pelagic waters, and the seabed. Most species grow quickly and are
              short-lived.
            </p>
            <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--four">
          <div>
            <h2>Shark</h2>
            <p>
              Sharks are a group of elasmobranch fish characterized by a cartilaginous
              skeleton, gill slits, and pectoral fins that are not fused to the head.
            </p>
            <a href="https://en.wikipedia.org/wiki/Shark" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--five">
          <div>
            <h2>Dolphin</h2>
            <p>
              Dolphins are widespread and prefer tropical waters. They feed largely on
              fish and squid, but some, like orcas, feed on large mammals.
            </p>
            <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noreferrer">
              explore
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
      <img
        src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png"
        alt="jellyfish"
        className="bg"
      />
      <img
        src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png"
        alt="scallop"
        className="bg2"
      />
    </main>
  );
};

export default Carousel4;
