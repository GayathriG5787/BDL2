import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://picsum.photos/id/1015/300/200",
  "https://picsum.photos/id/1016/300/200",
  "https://picsum.photos/id/1018/300/200",
  "https://picsum.photos/id/1019/300/200",
  "https://picsum.photos/id/1020/300/200",
];

const Carousel3 = () => {
    const [direction, setDirection] = useState("right");
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef(null);
  const slideCount = images.length;

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [hovering]);

  const startAutoplay = () => { 
    if (hovering) return;
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

const handleImageClick = (clickedIndex) => {
  if (clickedIndex === activeIndex) return;

  const half = Math.floor(slideCount / 2);
  let diff = clickedIndex - activeIndex;
  if (Math.abs(diff) > half) {
    diff = diff > 0 ? diff - slideCount : diff + slideCount;
  }

  setDirection(diff > 0 ? "right" : "left");

  const newIndex = (activeIndex + diff + slideCount) % slideCount;
  setActiveIndex(newIndex);
};


  const getDisplaySlides = () => {
    const order = [-2, -1, 0, 1, 2];
    return order.map((offset) => {
      const index = (activeIndex + offset + slideCount) % slideCount;
      return { img: images[index], offset, index };
    });
  };

  

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
      onMouseEnter={() => {
        setHovering(true);
        stopAutoplay();
      }}
      onMouseLeave={() => {
        setHovering(false);
        startAutoplay();
      }}
    >
      <div
        className="position-relative"
        style={{ perspective: "1200px", width: "80%", height: "300px" }}
      >
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ transformStyle: "preserve-3d" }}
        >
          {getDisplaySlides().map(({ img, offset, index }) => {
            const zIndex = -Math.abs(offset);
            const transform =
              offset === 0
                ? "scale(1.2) translateZ(50px)"
                : `rotateY(${offset * 30}deg) translateX(${offset * 200}px) scale(0.9)`;

            return (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="position-absolute rounded shadow border"
                style={{
                  width: "300px",
                  height: "200px",
                  transition: "all 0.6s ease",
                  cursor: "pointer",
                  transform,
                  zIndex,
                  opacity: 1,
                }}
                onClick={() => handleImageClick(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel3;
