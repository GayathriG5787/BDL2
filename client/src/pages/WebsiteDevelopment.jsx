import React from 'react';
import './WebsiteDevelopment.css';
import bannerVideo from '/src/assets/BannerWebsiteDev.mp4';

const WebsiteDevelopment = () => {
  return (
    <div className="video-banner-container">
      <video className="video-banner" autoPlay loop muted playsInline>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-full">
        <div className="text-wrapper">
          <h1 className="banner-heading">Website Development Services</h1>
          <p className="banner-subheading">
            Custom, Responsive, and High-Performance Websites
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
