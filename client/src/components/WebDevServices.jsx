import React from "react";

const WebsiteDevServices = () => {
  const services = [
    {
      title: "Responsive Design",
      icon: "bi-laptop",
      description: "Mobile-first, cross-device compatibility to ensure your site looks great everywhere.",
    },
    {
      title: "E-Commerce Integration",
      icon: "bi-cart-check",
      description: "Seamless online store integration with secure payment gateways.",
    },
    {
      title: "Custom UI/UX",
      icon: "bi-palette",
      description: "Unique, brand-aligned interfaces for a modern and intuitive user experience.",
    },
    {
      title: "SEO Optimization",
      icon: "bi-graph-up-arrow",
      description: "Search engine-friendly design to increase visibility and traffic.",
    },
    {
      title: "CMS Integration",
      icon: "bi-file-earmark-code",
      description: "Easy-to-manage content using platforms like WordPress or custom CMS.",
    },
    {
      title: "Speed & Performance",
      icon: "bi-lightning-charge",
      description: "Optimized code and CDN support for fast-loading websites.",
    },
  ];

  return (
    <section className="py-5" style={{ background: "linear-gradient(to right, #eaf4ff, #f5faff)" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-4 text-dark">What We Offer in Website Development</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3" style={{ transition: "0.3s ease" }}>
                <div className="card-body text-center">
                  <i className={`bi ${service.icon} text-primary fs-1 mb-3`}></i>
                  <h5 className="card-title fw-semibold">{service.title}</h5>
                  <p className="card-text text-muted small">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevServices;
