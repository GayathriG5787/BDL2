import React from "react";

import { FaPaintBrush, FaLaptopCode, FaCode, FaFacebookF, FaBullhorn, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  { icon: <FaPaintBrush size={30} className="text-primary" />, title: "Logo Designing" },
  { icon: <FaLaptopCode size={30} className="text-primary" />, title: "Website Development" },
  { icon: <FaCode size={30} className="text-primary" />, title: "Software Development" },
  { icon: <FaFacebookF size={30} className="text-primary" />, title: "Social Media Management" },
  { icon: <FaBullhorn size={30} className="text-primary" />, title: "Digital Marketing" },
  { icon: <FaHeadset size={30} className="text-primary" />, title: "IT Support" },
];

const WhatWeDo = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/services");
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#3B82F6", color: "white" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-3">What We Do</h2>
        <p className="mb-5 px-3">
          At Bharat Digital Limited, we provide cutting-edge digital services that empower your brand and streamline your business. From designing impactful logos to developing scalable websites and software, we ensure your digital presence thrives.
        </p>
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="bg-white rounded-4 py-4 px-3 d-flex align-items-center justify-content-start shadow-sm h-100">
                <div className="me-3">{service.icon}</div>
                <h5 className="mb-0 text-dark">{service.title}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-5">
          <button className="btn btn-light px-4 py-2 rounded-pill fw-semibold" onClick={handleExploreClick}>
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
