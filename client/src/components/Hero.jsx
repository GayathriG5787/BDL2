import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const LazySpline = React.lazy(() =>
  import('@splinetool/react-spline').then((module) => ({
    default: module.default,
  }))
);

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Lazy-loaded Spline */}
      {inView && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'auto',
          }}
        >
          <Suspense fallback={<div></div>}>
            <LazySpline scene="https://prod.spline.design/wWbD2Tg3U8XlRSPe/scene.splinecode" />
          </Suspense>
        </div>
      )}

      {/* Overlay Content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0 5%',
          pointerEvents: 'none',
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
