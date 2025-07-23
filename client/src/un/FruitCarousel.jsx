import React, { useState } from 'react';

const datas = {
  strawberry: 'The garden strawberry (or simply strawberry /\u02c8str\u0254\u02d0b\u1d50ri/; Fragaria \u00d7 ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)',
  banana: 'A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.',
  apple: 'The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.',
  orange: 'The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus \u00d7 sinensis in the family Rutaceae.'
};

const pictograms = {
  strawberry: 'https://d30y9cdsu7xlg0.cloudfront.net/png/83067-200.png',
  banana: 'https://d30y9cdsu7xlg0.cloudfront.net/png/53209-200.png',
  apple: 'https://d30y9cdsu7xlg0.cloudfront.net/png/14333-200.png',
  orange: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9636-200.png'
};

const colors = {
  strawberry: '#D64541',
  banana: '#F5D76E',
  apple: '#00B16A',
  orange: '#F27935'
};

function FruitCarousel() {
  const [selected, setSelected] = useState('strawberry');

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
      <div className="d-flex shadow w-100" style={{ backgroundColor: '#fff' }}>
        <div className="d-flex flex-column justify-content-center align-items-start p-3" style={{ width: '350px', backgroundColor: '#fff' }}>
          {Object.entries(datas).map(([key, val]) => (
            <div key={key} className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="fruitCarousel"
                id={`radio_${key}`}
                value={key}
                checked={selected === key}
                onChange={() => setSelected(key)}
              />
              <label htmlFor={`radio_${key}`} className="form-check-label d-flex align-items-center" style={{ cursor: 'pointer', opacity: selected === key ? 1 : 0.6, borderRight: selected === key ? `4px solid ${colors[key]}` : 'none', color: selected === key ? colors[key] : 'inherit' }}>
                <img src={pictograms[key]} alt={key} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                <span style={{ textTransform: 'capitalize' }}>{key}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="border-end" style={{ width: '2px', backgroundColor: '#eee' }}></div>

        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4" style={{ backgroundColor: '#fff' }}>
          <div style={{ backgroundImage: `url(${pictograms[selected]})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100px', height: '100px' }}></div>
          <h1 style={{ color: colors[selected], textTransform: 'capitalize' }}>{selected}</h1>
          <p className="text-center" style={{ maxWidth: '60%' }}>{datas[selected]}</p>
        </div>
      </div>
    </div>
  );
}

export default FruitCarousel;
