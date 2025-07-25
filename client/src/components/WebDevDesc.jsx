import React from 'react';

const WebsiteDevelopmentDescription = () => {
  return (
    <section className="webdev-description-section" style={{ paddingTop : "7rem", paddingBottom : '7rem', background: "linear-gradient(to right, #eaf4ff, #f5faff)"}}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3 text-dark">Crafting Modern, Responsive Websites</h2>
            <p className="text-secondary fs-5">
              At Bharat Digital Limited, we specialize in creating visually stunning, fast, and user-friendly websites tailored to your business goals. Whether you're launching a portfolio, startup, or enterprise solution, we bring your digital presence to life with modern tools and scalable solutions.
            </p>
            <ul className="list-unstyled mt-4 text-secondary fs-5">
            {[
                "Custom Design & Branding",
                "Mobile-First Responsive Layouts",
                "SEO-Friendly Development",
                "CMS & E-Commerce Solutions",
            ].map((item, index) => (
                <li key={index} className="mb-3 d-flex align-items-start fs-5">
                <span
                    className="me-3 mt-1 d-inline-flex justify-content-center align-items-center"
                    style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#0d6efd", // Bootstrap primary
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: "0.8rem",
                    }}
                >
                    ✓
                </span>
                <span>{item}</span>
                </li>
            ))}
            </ul>

          </div>

          {/* Working Placeholder Image from Unsplash */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
              alt="Website development illustration"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopmentDescription;
