import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const easterItems = [
  {
    title: 'The Cross',
    img: 'https://images.pexels.com/photos/635699/pexels-photo-635699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'The Cross',
    description:
      'The Cross is a central symbol of Easter, representing the crucifixion of Jesus Christ and his sacrifice for humanity. It serves as a reminder of suffering, love, and redemption.',
  },
  {
    title: 'Easter Eggs',
    img: 'https://images.pexels.com/photos/7168798/pexels-photo-7168798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Easter Eggs',
    description:
      'Easter eggs are a colorful symbol of new life and rebirth, often decorated and hidden for festive hunts. They represent resurrection and spring.',
  },
  {
    title: 'Hot Cross Buns',
    img: 'https://images.pexels.com/photos/4099179/pexels-photo-4099179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Hot Cross Buns',
    description:
      'Hot cross buns are sweet, spiced buns eaten on Good Friday. The cross represents Jesus and the spices recall burial traditions.',
  },
  {
    title: 'Easter Chick',
    img: 'https://images.pexels.com/photos/5145/animal-easter-chick-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Easter Chick',
    description:
      'Easter chicks are a cheerful symbol of new life and beginnings. They tie into spring’s arrival and Easter’s renewal themes.',
  },
  {
    title: 'Easter Bunnies',
    img: 'https://images.pexels.com/photos/2072158/pexels-photo-2072158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Easter Bunny',
    description:
      'Easter bunnies are a popular symbol of spring and new life, often seen delivering colorful eggs to children.',
  },
  {
    title: 'Crown of Thorns',
    img: 'https://images.pexels.com/photos/12787666/pexels-photo-12787666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Crown of Thorns',
    description:
      'The Crown of Thorns symbolizes Jesus’ suffering. It represents the pain he endured and is a key reminder during Easter.',
  },
];

export default function EasterCarousel() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Easter Symbols</h1>
      <Carousel fade interval={6000}>
        {easterItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <img
                src={item.img}
                alt={item.alt}
                className="d-block"
                style={{
                  maxHeight: '450px',
                  objectFit: 'cover',
                  width: '100%',
                  borderRadius: '10px',
                }}
              />
            </div>
            <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3 mt-3">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="btn btn-outline-light btn-sm mt-2">
                Read more
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
