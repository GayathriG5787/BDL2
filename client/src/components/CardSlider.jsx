import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css'
import webImg from '../assets/web.png';
import socialImg from '../assets/social.png';
import digitalImg from '../assets/digital.png';
import itImg from '../assets/IT.png';
import softImg from '../assets/soft.png';

function CardSlider() {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="px-1">
            <div
              className="card shadow-sm mx-auto custom-card rounded-4"
              style={{height: "450px", width: "90%", border: "2px solid blue"}} 
            >
              <img
                src={d.img}
                alt={d.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "contain", padding: "55px" }} // 👈 Full-width banner-style image
              />
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title" style={{ color: "blue", paddingBottom: "10px" }}>{d.name}</h5> 
                  <p className="card-text">{d.review}</p>
                </div>
                <button className="btn btn-primary mt-2 w-50 d-block mx-auto rounded-pill">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    name: "Website Development",
    img: webImg,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Software Development",
    img: softImg,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Digital Marketing",
    img: digitalImg,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Social Media Management",
    img: socialImg,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "IT Support",
    img: itImg,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default CardSlider;
