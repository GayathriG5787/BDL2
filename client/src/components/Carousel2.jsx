import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";

const Carousel2 = () => {
  const totalItems = 6;
  const anglePerItem = 360 / totalItems;

  const [currdeg, setCurrdeg] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentRotation = useRef(0);
  const carouselRef = useRef(null);
  const autoRotateRef = useRef(null);
  const touchStartX = useRef(null);

  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1019/300/200",
    "https://picsum.photos/id/1020/300/200",
    "https://picsum.photos/id/1021/300/200",
  ];

  const itemTransforms = images.map(
    (_, i) => `rotateY(${i * anglePerItem}deg) translateZ(300px)`
  );

  // 🔄 Auto rotate every 3 seconds
  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate;
  }, []);

  const startAutoRotate = () => {
    stopAutoRotate();
    autoRotateRef.current = setInterval(() => {
      setCurrdeg((prev) => prev - anglePerItem);
    }, 3000);
  };

  const stopAutoRotate = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
  };

  // 🖱️ Mouse drag events
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentRotation.current = currdeg;
    stopAutoRotate();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    setCurrdeg(currentRotation.current + deltaX / 2);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startAutoRotate();
  };

  // 📱 Touch swipe events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    currentRotation.current = currdeg;
    stopAutoRotate();
  };

  const handleTouchMove = (e) => {
    const deltaX = e.touches[0].clientX - touchStartX.current;
    setCurrdeg(currentRotation.current + deltaX / 2);
  };

  const handleTouchEnd = () => {
    startAutoRotate();
  };

  // 📍 Click to center
  const getClosestAngle = (targetIndex) => {
    const currentIndex = Math.round(-currdeg / anglePerItem) % totalItems;
    const normalizedCurrent = (currentIndex + totalItems) % totalItems;

    let diff = targetIndex - normalizedCurrent;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    return currdeg - diff * anglePerItem;
  };

  const handleClick = (index) => {
    const newDeg = getClosestAngle(index);
    setCurrdeg(newDeg);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "70px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        background: "transparent",
        overflowX: "hidden",
      }}
    >
      <Container className="d-flex flex-column align-items-center">
        <div
          ref={carouselRef}
          style={{
            width: "300px",
            height: "200px",
            perspective: "1000px",
            position: "relative",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={(e) => { handleMouseUp(e); startAutoRotate(); }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={stopAutoRotate}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transformStyle: "preserve-3d",
              transition: isDragging.current ? "none" : "transform 1s",
              transform: `rotateY(${currdeg}deg)`,
              cursor: isDragging.current ? "grabbing" : "grab",
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                  transform: itemTransforms[index],
                  transition: "transform 0.5s ease",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Carousel2;
