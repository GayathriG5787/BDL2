import React, { useState } from 'react';
import { Tabs, Tab, Accordion } from 'react-bootstrap';
import './Career.css';

const Career = () => {
  const [activeKey, setActiveKey] = useState(null);

  const jobData = {
    Development: [
      {
        title: "Frontend Developer",
        desc: `
          <p>We are seeking a creative, detail-oriented, and technically skilled <strong>Frontend Developer</strong> to join our growing team. The ideal candidate will be responsible for transforming UI/UX designs into interactive, performant, and user-friendly web interfaces. You will collaborate with cross-functional teams to ensure an exceptional user experience across devices.</p>

          <h6><strong>Key Responsibilities:</strong></h6>
          <ul>
            <li>Build responsive and engaging web interfaces using React.js, HTML5, CSS3, and JavaScript (ES6+).</li>
            <li>Convert designs and wireframes from tools like Figma into functional frontend code.</li>
            <li>Optimize web performance, accessibility, and cross-browser compatibility.</li>
            <li>Collaborate with UI/UX designers, backend developers, and product managers.</li>
            <li>Maintain clean, scalable, and well-documented codebase.</li>
            <li>Work with REST APIs and integrate frontend with backend services.</li>
            <li>Participate in Agile sprints and code reviews.</li>
          </ul>

          <h6><strong>Preferred Skills:</strong></h6>
          <ul>
            <li>Proficiency in React.js and familiarity with frameworks like Next.js or Vue.js is a plus.</li>
            <li>Experience with state management (Redux, Context API).</li>
            <li>Understanding of responsive design principles.</li>
            <li>Familiarity with Git, JIRA, and CI/CD tools.</li>
            <li>Experience with frontend testing libraries like Jest or Cypress.</li>
          </ul>

          <h6><strong>Requirements:</strong></h6>
          <ul>
            <li>Bachelor’s degree in Computer Science or related field.</li>
            <li>1–3 years of frontend development experience.</li>
            <li>Strong problem-solving and debugging skills.</li>
            <li>Effective communication and collaboration skills.</li>
          </ul>

          <h6><strong>Perks:</strong></h6>
          <ul>
            <li>Competitive salary: £35,000 – £54,000 (based on experience).</li>
            <li>Flexible work hours and remote options.</li>
            <li>Training & certification support.</li>
            <li>Inclusive, friendly, and innovative team environment.</li>
          </ul>
          `
      },
      {
        title: "Backend Developer",
        desc: `
          <p>We are looking for a skilled and analytical <strong>Backend Developer</strong> to join our development team. The ideal candidate will be responsible for building and maintaining robust server-side applications, managing database interactions, and ensuring optimal performance of backend systems. You will collaborate closely with frontend developers, DevOps, and product managers to deliver high-quality software solutions.</p>

          <h6><strong>Key Responsibilities:</strong></h6>
          <ul>
            <li>Design, develop, and maintain scalable backend services using Node.js, Express.js, or similar frameworks.</li>
            <li>Work with databases such as MongoDB, PostgreSQL, or MySQL to model and manage data effectively.</li>
            <li>Develop RESTful APIs and integrate them with frontend and third-party services.</li>
            <li>Write clean, reusable, and efficient code following best practices.</li>
            <li>Implement security and data protection standards.</li>
            <li>Collaborate with cross-functional teams to understand requirements and deliver solutions.</li>
            <li>Debug, test, and deploy applications in cloud environments (e.g., AWS, Azure, or Firebase).</li>
          </ul>

          <h6><strong>Preferred Skills:</strong></h6>
          <ul>
            <li>Strong experience with Node.js, Express.js, and database systems like MongoDB.</li>
            <li>Knowledge of authentication and authorization mechanisms (OAuth, JWT).</li>
            <li>Familiarity with API documentation tools (Swagger/Postman).</li>
            <li>Experience with Docker, CI/CD pipelines, and Git version control.</li>
            <li>Understanding of microservices and cloud-based architecture.</li>
          </ul>

          <h6><strong>Requirements:</strong></h6>
          <ul>
            <li>Bachelor’s degree in Computer Science or a related field.</li>
            <li>1–3 years of backend development experience.</li>
            <li>Strong problem-solving and debugging skills.</li>
            <li>Effective communication and collaboration skills.</li>
          </ul>

          <h6><strong>Perks:</strong></h6>
          <ul>
            <li>Competitive salary: £35,000 – £54,000 (based on experience).</li>
            <li>Flexible work hours and remote options.</li>
            <li>Training & certification support.</li>
            <li>Supportive and inclusive team culture.</li>
          </ul>
          `
,
      },
    ],
    Marketing: [
      {
        title: "Digital Marketing Executive",
        desc: `
          <p>We are seeking a dynamic and strategic <strong>Digital Marketing Executive</strong> to manage and grow our online presence across various digital platforms. The successful candidate will be responsible for planning, executing, and optimizing digital marketing campaigns to boost brand awareness, drive traffic, and generate qualified leads.</p>

          <h6><strong>Key Responsibilities:</strong></h6>
          <ul>
            <li>Plan and execute SEO/SEM, email, social media, and display advertising campaigns.</li>
            <li>Design and manage content strategies across digital channels (Facebook, Instagram, LinkedIn, Google, etc.).</li>
            <li>Monitor and analyze performance metrics using tools like Google Analytics, Search Console, and SEMrush.</li>
            <li>Conduct market research and competitor analysis to identify trends and opportunities.</li>
            <li>Coordinate with content creators, designers, and developers to enhance campaign effectiveness.</li>
            <li>Optimize website content, landing pages, and conversion funnels.</li>
          </ul>

          <h6><strong>Preferred Skills:</strong></h6>
          <ul>
            <li>Strong knowledge of SEO, Google Ads, Meta Ads, and social media platforms.</li>
            <li>Experience with marketing automation tools and CRMs (e.g., HubSpot, Mailchimp).</li>
            <li>Familiarity with content marketing, blogging, and copywriting best practices.</li>
            <li>Basic understanding of HTML/CSS is a plus.</li>
          </ul>

          <h6><strong>Requirements:</strong></h6>
          <ul>
            <li>Bachelor’s degree in Marketing, Communications, or a related field.</li>
            <li>1–3 years of hands-on digital marketing experience.</li>
            <li>Creative mindset with strong analytical and reporting skills.</li>
            <li>Excellent communication and teamwork abilities.</li>
          </ul>

          <h6><strong>Perks:</strong></h6>
          <ul>
            <li>Competitive salary: £30,000 – £50,000 (based on experience).</li>
            <li>Remote-friendly culture and flexible timings.</li>
            <li>Opportunities for career advancement and upskilling.</li>
            <li>Supportive and collaborative work environment.</li>
          </ul>
          `
,
      },
    ],
  };

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="career-page">

      {/* Hero Section */}
      {/* <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel"> */}
      <div id="heroCarousel" className="carousel slide mb-5">
        <div className="carousel-inner glassy-container rounded-4">
          <div className="carousel-item active text-center p-5 bg-primary text-white">
            <h1 className="display-5 pt-5 fw-bold">Join Our Team</h1>
            <p className="lead">Explore opportunities to work, grow, and lead with us!</p>
          </div>
          <div className="carousel-item text-center p-5 bg-info text-white">
            <h1 className="display-6 pt-5 fw-bold">Shape Your Future</h1>
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
                        <div dangerouslySetInnerHTML={{ __html: job.desc }} />
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
