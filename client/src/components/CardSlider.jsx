import React from "react";
import "./CardSlider.css";
import slide1 from "../assets/videos/slide1.mp4";
import slide2 from "../assets/videos/slide2.mp4";

const CardSlider = () => {
  return (
    <div id="videoCarousel" className="carousel slide custom-slider-wrapper mb-5" data-bs-ride="carousel">
      <div className="carousel-inner video-carousel-container rounded-4">
        <div className="carousel-item active custom-slide">
          <video
            src={slide1}
            autoPlay
            muted
            loop
            playsInline
            className="custom-video"
          />
          <div className="custom-overlay-text"></div>
        </div>
        <div className="carousel-item custom-slide">
          <video
            src={slide2}
            autoPlay
            muted
            loop
            playsInline
            className="custom-video"
          />
          <div className="custom-overlay-text"></div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CardSlider;
