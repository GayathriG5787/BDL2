import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic",
      price: "£299",
      features: [
        "1 Page Website",
        "Responsive Design",
        "Basic SEO",
        "Free Hosting (1 Year)",
        "Email Support",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      title: "Standard",
      price: "£599",
      features: [
        "Up to 5 Pages",
        "Custom Design",
        "SEO Optimization",
        "Free Hosting (1 Year)",
        "Priority Support",
      ],
      buttonText: "Get Started",
      highlight: true, // Middle card with gradient
    },
    {
      title: "Premium",
      price: "£999",
      features: [
        "Unlimited Pages",
        "Custom UI/UX",
        "Advanced SEO",
        "Free Hosting (2 Years)",
        "24/7 Support",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to right, #eaf4ff, #f5faff)",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-3" style={{ color: "#0c1e3c", fontSize: "2.5rem" }}>
          Website Development Pricing
        </h2>
        <p className="text-muted mb-5" style={{ fontSize: "1.15rem" }}>
          Choose the plan that fits your business needs.
        </p>

        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className="card border-0 h-100"
                style={{
                  borderRadius: "12px",
                  background: plan.highlight
                    ? "linear-gradient(135deg, #007bff, #0056d2)"
                    : "#ffffff",
                  color: plan.highlight ? "#ffffff" : "#0d1b2a",
                  border: plan.highlight
                    ? "none"
                    : "1px solid rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  minHeight: "520px", // Increased card height
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="card-body d-flex flex-column p-5">
                  <h4 className="fw-bold mb-4" style={{ fontSize: "1.8rem" }}>
                    {plan.title}
                  </h4>
                  <h2 className="fw-bold mb-5" style={{ fontSize: "2.4rem" }}>
                    {plan.price}
                  </h2>
                  <ul
                    className="list-unstyled text-start mb-5"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-3">
                        <i
                          className={`bi bi-check-circle-fill me-2 ${
                            plan.highlight ? "text-light" : "text-primary"
                          }`}
                          style={{ fontSize: "1.2rem" }}
                        ></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${
                      plan.highlight ? "btn-light" : "btn-primary"
                    } mt-auto py-2 px-4`}
                    style={{
                      borderRadius: "25px",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
