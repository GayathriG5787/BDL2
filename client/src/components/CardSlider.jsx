import React, { useState, useEffect, useRef } from "react";
import "./CardSlider.css";

const rawSlides = [
  { id: "clubs", video: "/videos/slide1.mp4" },
  { id: "hearts", video: "/videos/slide2.mp4" }
];

const slides = [
  rawSlides[rawSlides.length - 1],
  ...rawSlides,
  rawSlides[0],
];

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef();

  const goToNext = () => {
    if (!isTransitioning) return;
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) return;
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (currentSlide === slides.length - 1) {
        setTimeout(() => setCurrentSlide(1), 0);
      }
      if (currentSlide === 0) {
        setTimeout(() => setCurrentSlide(slides.length - 2), 0);
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentSlide]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  return (
    <div className="custom-slider-wrapper">
      <div
        ref={sliderRef}
        className={`custom-slider-container ${isTransitioning ? "custom-transition" : ""}`}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div className="custom-slide" key={index}>
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="custom-video"
            />
            <div className="custom-overlay-text">{slide.name}</div>
          </div>
        ))}
      </div>

      <div className="custom-slider-controls">
        <button type="button" className="custom-nav-button" onClick={goToPrev}>
          &#10094;
        </button>
        <button type="button" className="custom-nav-button" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
