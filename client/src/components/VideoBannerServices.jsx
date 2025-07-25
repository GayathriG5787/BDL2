import React from 'react';
import './VideoBannerServices.css'; // Reuse the same CSS

const VideoBanner = ({ videoSrc, title, subtitle }) => {
  return (
    <div className="video-banner-container">
      <video className="video-banner" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-full">
        <div className="text-wrapper">
          <h1 className="banner-heading">{title}</h1>
          <p className="banner-subheading">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
