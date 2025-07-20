import React from "react";
import "./Slider.css"; // External CSS for styling

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];

const Slider = () => {
  return (
    <div>
      <h1>Our Featured Partners</h1>
    <div className="slider">
      <div className="slide-track">
        {[...images, ...images].map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} height="100" width="250" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slider;
