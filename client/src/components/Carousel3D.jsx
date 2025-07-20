import React, { useState } from "react";
import "./Carousel3D.css"; // Keep the same CSS as your original

const images = [
  "https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089__340.jpg",
  "https://cdn.pixabay.com/photo/2012/11/28/11/28/rocket-launch-67723__340.jpg",
  "https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/06/17/09/28/wormhole-5308810__340.jpg",
  "https://cdn.pixabay.com/photo/2016/11/18/22/58/stars-1837306__340.jpg",
  "https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448__340.jpg",
  "https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188__340.jpg",
  "https://cdn.pixabay.com/photo/2011/12/15/11/32/pismis-24-11186__340.jpg"
];

const classPositions = [
  "hideLeft",
  "prevLeftSecond",
  "prev",
  "selected",
  "next",
  "nextRightSecond",
  "hideRight",
  "hideRight"
];

export default function Carousel3D() {
  const [centerIndex, setCenterIndex] = useState(3);

  const getClass = (index) => {
    const pos = (index - centerIndex + images.length) % images.length;
    return classPositions[pos] || "hideRight";
  };

  const next = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
      <div id="carousel" className="carousel">
        {images.map((src, idx) => (
          <div key={idx} className={getClass(idx)}>
            <img src={src} alt={`slide-${idx}`} />
          </div>
        ))}
      </div>

      <div className="buttons mt-4 d-flex gap-4">
        <button className="button-82-pushable" onClick={prev}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">Previous</span>
        </button>

        <button className="button-82-pushable" onClick={next}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">Next</span>
        </button>
      </div>
    </main>
  );
}
