import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ServicesH.css';
import Spline from '@splinetool/react-spline';

import webImg from '../assets/web.png';
import socialImg from '../assets/social.png';
import digitalImg from '../assets/digital.png';
import itImg from '../assets/IT.png';
import softImg from '../assets/soft.png';

function ServicesH() {
  const settings = {
    infinite: true, 
    arrows: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="services-section">
      {/* Spline 3D Background */}
      {/* <Spline 
        className="spline-background"
        scene="https://prod.spline.design/dBxyhwjxOZcOqHwL/scene.splinecode" 
      /> */}

      {/* Content */}
      <div className="container mt-5 mb-5 content-overlay">
        <h1 className="fw-bold services-title">Services</h1>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2 h-100"> {/* Add h-100 here */}
              <div className="card shadow-sm mx-auto custom-card h-100">
                <img
                  src={d.img}
                  alt={d.name}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title text-primary fw-semibold mb-2">
                      {d.name}
                    </h5> 
                    <p className="card-text text-muted small pt-2">
                      {d.review}
                    </p>
                  </div>
                  <button className="btn btn-primary mt-3 w-50 mx-auto p-2 rounded-pill">
                    Read More
                  </button>
                </div>
              </div>
            </div>   
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  { name: "Website Development", img: webImg, review: "Build modern, responsive websites tailored to your business needs and goals." },
  { name: "Software Development", img: softImg, review: "Custom software solutions designed to automate and streamline your operations." },
  { name: "Digital Marketing", img: digitalImg, review: "Boost your brand visibility through targeted digital marketing strategies." },
  { name: "Social Media Management", img: socialImg, review: "Grow your online presence with professional social media content and campaigns." },
  { name: "IT Support", img: itImg, review: "Reliable and timely IT support to keep your business running smoothly." }
];

export default ServicesH;


