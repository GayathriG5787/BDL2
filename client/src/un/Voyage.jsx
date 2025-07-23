import React, { useRef, useState } from "react";
import "./Voyage.css";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",
];

const Voyage = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const carouselRef = useRef(null);

  const rotateCarousel = (index) => {
    const angle = (360 / images.length) * index;
    carouselRef.current.style.transform = `translateZ(-288px) rotateY(-${angle}deg)`;
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
    rotateCarousel(index);
  };

  return (
    <div className="wrapper">
      <div className="carousel" ref={carouselRef}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="carousel-image"
            style={{ transform: `rotateY(${(360 / images.length) * index}deg) translateZ(288px)` }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Voyage;
