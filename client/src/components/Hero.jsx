import React from 'react';

const HeroSection = () => {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      
      {/* Fullscreen Interactive 3D Model */}
      <iframe
        src="https://my.spline.design/interactiveaiwebsite-wt9VmNbGgXMKlavj84OiWCl2/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2, // On top to be interactive
          pointerEvents: 'auto',
          border: 'none',
        }}
        allow="autoplay; fullscreen"
      ></iframe>

      {/* Overlay Container */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 3, // Above iframe
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0 5%',
          pointerEvents: 'none', // Let mouse events go to iframe
        }}
      >
        <div style={{ maxWidth: '600px', color: '#111827', pointerEvents: 'auto' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Transforming Ideas into Tech
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4B5563', marginBottom: '2rem' }}>
            Bharat Digital Limited provides end-to-end digital services to help businesses grow in the modern world.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="#services"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '999px',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Explore Services
            </a>
            <a
              href="#contact"
              style={{
                border: '2px solid #3b82f6',
                color: '#3b82f6',
                padding: '0.75rem 1.5rem',
                borderRadius: '999px',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
