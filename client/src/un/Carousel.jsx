import React, { useEffect, useRef, useState } from 'react';

const Carousel3D = () => {
  const [angle, setAngle] = useState(0);
  const carouselRef = useRef(null);
  const startY = useRef(0);
  const currentAngle = useRef(0);
  const autoRotateInterval = useRef(null);
  const cellCount = 5;
  const rotateAngle = 360 / cellCount;

  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1019/300/200",
    "https://picsum.photos/id/1020/300/200",
  ];

  // Inject CSS on mount
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .scene {
        width: 210px;
        height: 140px;
        position: relative;
        perspective: 1000px;
        cursor: grab;
      }
      .carousel {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transition: transform 1s ease-in-out;
      }
      .carousel__cell {
        position: absolute;
        width: 190px;
        height: 120px;
        left: 10px;
        top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        backface-visibility: hidden;
        transition: transform 1s ease-in-out;
      }
      .carousel__cell img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Set up autoplay
  useEffect(() => {
    autoRotateInterval.current = setInterval(() => {
      setAngle(prev => prev - rotateAngle);
    }, 3000);
    return () => clearInterval(autoRotateInterval.current);
  }, []);

  const handleStart = (e) => {
    clearInterval(autoRotateInterval.current); // Pause autoplay while dragging

    startY.current = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    currentAngle.current = angle;

    const handleMove = (ev) => {
      const y = ev.type === 'touchmove' ? ev.touches[0].clientY : ev.clientY;
      const deltaY = y - startY.current;
      const newAngle = currentAngle.current + deltaY * 0.3;
      setAngle(newAngle);
    };

    const handleEnd = () => {
      autoRotateInterval.current = setInterval(() => {
        setAngle(prev => prev - rotateAngle);
      }, 3000);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
  };

  const handleClickImage = (index) => {
    const newAngle = -index * rotateAngle;
    setAngle(newAngle);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="scene"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        ref={carouselRef}
      >
        <div
          className="carousel"
          style={{ transform: `translateZ(-150px) rotateX(${angle}deg)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="carousel__cell"
              style={{
                transform: `rotateX(${i * rotateAngle}deg) translateZ(150px)`,
              }}
              onClick={() => handleClickImage(i)}
            >
              <img src={src} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
