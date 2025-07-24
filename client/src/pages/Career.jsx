import React, { useState } from 'react';
import { Tabs, Tab, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Career.css';

const Career = () => {
  const [activeKey, setActiveKey] = useState(null);

  const jobData = {
    Development: [
      {
        title: "Frontend Developer",
        desc: "Work with React.js, HTML/CSS, and modern UI libraries.",
      },
      {
        title: "Backend Developer",
        desc: "Work with Node.js, Express, and MongoDB.",
      },
    ],
    Marketing: [
      {
        title: "Digital Marketing Executive",
        desc: "SEO, SEM, social media campaigns, content strategies.",
      },
    ],
  };

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="career-page">

      {/* Hero Section */}
      <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner glassy-container rounded-4">
          <div className="carousel-item active text-center p-5 bg-primary text-white">
            <h1 className="display-5 fw-bold">Join Our Team</h1>
            <p className="lead">Explore opportunities to work, grow, and lead with us!</p>
          </div>
          <div className="carousel-item text-center p-5 bg-info text-white">
            <h1 className="display-6 fw-bold">Shape Your Future</h1>
            <p className="lead">Be a part of a dynamic and collaborative work culture.</p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

       {/* Hiring Procedure Section */}
      <div className="container mb-5">
        <h2 className="mb-4 text-primary fw-bold">Our Hiring Process</h2>
        <div className="d-flex justify-content-between align-items-center flex-wrap roadmap">
          {["Application", "Shortlisting", "Interview", "Offer", "Onboarding"].map((step, idx) => (
            <div key={idx} className="roadmap-step text-center glassy-step rounded-3 m-2">
              <div className="step-circle mb-2">{idx + 1}</div>
              <p className="fw-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings Section with Tabs and Accordions */}
      <div className="container mb-5">
        <h2 className=" text-primary mb-4 fw-bold">Current Openings</h2>
        <Tabs defaultActiveKey="Development" className="mb-3  glassy-tabs">
          {Object.keys(jobData).map((dept, i) => (
            <Tab eventKey={dept} title={dept} key={i}>
              <Accordion activeKey={activeKey}>
                {jobData[dept].map((job, index) => {
                  const eventKey = `${dept}-${index}`;
                  return (
                    <Accordion.Item
                      eventKey={eventKey}
                      key={eventKey}
                      className="mb-3 glassy-accordion shadow-sm"
                    >
                      <Accordion.Header onClick={() => handleToggle(eventKey)}>
                        {job.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        {job.desc}
                        <div className="mt-3">
                          <button className="btn btn-primary">Apply Now</button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Tab>
          ))}
        </Tabs>
      </div>



    </div>
  );
};

export default Career;
