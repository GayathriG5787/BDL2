import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testi.css"; // Custom styles

const testimonials = [
  { name: "EMILIANO AQUILANI", img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" },
  { name: "ANNA ITURBE", img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" },
  { name: "LARA ATKINSON", img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" },
  { name: "IAN OWEN", img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" },
  { name: "MICHAEL TEDDY", img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" },
];

const Testi = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 8500,
    speed: 450,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1170, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials py-5">
        <h1>What our customers say</h1>
      <div className="container">
        <Slider {...settings}>
  {testimonials.map((testimonial, index) => (
    <div className="px-3 position-relative" key={index}>
      <div className="shadow-effect">
        <img className="img-circle" src={testimonial.img} alt={testimonial.name} />
        <p>
          Dramatically maintain clicks-and-mortar solutions without functional solutions.
          Completely synergize resource taxing relationships via premier niche markets.
          Professionally cultivate.
        </p>
      </div>
      <div className="testimonial-name overlap-bottom">{testimonial.name}</div>
    </div>
  ))}
</Slider>

      </div>
    </section>
  );
};

export default Testi;
