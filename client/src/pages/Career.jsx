import React, { useState } from 'react';
import { Tabs, Tab, Accordion } from 'react-bootstrap';
import './Career.css';

const Career = () => {
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

          <h6>Key Responsibilities:</h6>
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


  const [activeTab, setActiveTab] = useState("Development");
  const [activeKey, setActiveKey] = useState("Development-0");

  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
    setActiveKey(`${tabKey}-0`);
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <div id="heroCarousel" className="carousel slide mb-5">
        <div className="carousel-inner glassy-container rounded-4">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?fit=crop&w=1200&q=80"
              className="d-block w-100 rounded-4"
              alt="Join Our Team"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?fit=crop&w=1200&q=80"
              className="d-block w-100 rounded-4"
              alt="Shape Your Future"
            />
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
      <div className="container hiring-procedure-section">
        <h2 className="text-center fw-bold mb-3">Our Hiring Procedure</h2>
        <p className="text-center text-muted mb-5">
          Here are the steps of the selection process for hiring employees. Tell us about your skills and aspirations.
        </p>

        <div className="row justify-content-center text-center gx-4 gy-5">
          {[
            {
              title: "Select the Position you want to Apply",
              desc: "Choose a role that matches your skills and career goals.",
            },
            {
              title: "Panel Interview by Senior Members",
              desc: "Meet with senior team members for an in-depth assessment.",
            },
            {
              title: "Finalization of Hired Candidates",
              desc: "Final evaluation and selection of successful applicants.",
            },
          ].map((step, idx) => (
            <div key={idx} className="col-md-4 px-4 position-relative hiring-step">
              <div className="circle-number mb-3">{idx + 1}</div>
              <h5 className="fw-bold text-primary">{step.title}</h5>
              <p className="text-muted">{step.desc}</p>
              {idx < 2 && <div className="connector d-none d-md-block"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="container mb-5">
        <h2 className="mb-4 pb-5 fw-bold text-center">Current Openings</h2>
        <Tabs
          activeKey={activeTab}
          onSelect={handleTabSelect}
          className="mb-3 glassy-tabs"
        >
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
                          <button className="btn btn-primary rounded-pill">Apply Now</button>
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

//original
