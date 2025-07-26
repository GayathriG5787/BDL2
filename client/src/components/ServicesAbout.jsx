import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLaptopCode, FaNetworkWired, FaCogs, FaBullhorn, FaThumbsUp } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={40} className="text-primary" />,
      title: 'Website Development',
      desc: 'We create dynamic and responsive websites tailored to meet your business needs.',
    },
    {
      icon: <FaNetworkWired size={40} className="text-primary" />,
      title: 'IT Support',
      desc: 'Our team ensures smooth IT operations with 24/7 technical support and maintenance.',
    },
    {
      icon: <FaCogs size={40} className="text-primary" />,
      title: 'Software Development',
      desc: 'We build scalable software solutions for businesses to enhance productivity and growth.',
    },
    {
      icon: <FaBullhorn size={40} className="text-primary" />,
      title: 'Digital Marketing',
      desc: 'We provide SEO, SEM, and social media marketing strategies to boost your brand visibility.',
    },
    {
      icon: <FaThumbsUp size={40} className="text-primary" />,
      title: 'Social Media Management',
      desc: 'We manage and grow your social media presence across all major platforms.',
    },
  ];

  return (
    <section className="bg-light py-5" style={{ background: "linear-gradient(to right, #f8fbff, #eef6fc)" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Services</h2>
        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card className="h-100 text-center shadow-sm border-0 rounded-4 p-3 bg-white">
                <div className="mb-3">{service.icon}</div>
                <Card.Title className="fw-semibold">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action Button */}
        <div className="text-center mt-5">
          <Button variant="primary" size="lg" className="rounded-pill px-4">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
