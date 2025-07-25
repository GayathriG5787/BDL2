import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import digitalMarketingVideo from '../assets/BannerDigital.mp4';

const DigitalMarketingPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={digitalMarketingVideo}
        title="Digital Marketing Services"
        subtitle="Boost Visibility, Drive Traffic, and Maximize ROI"
      />
      {/* Additional content here */}
    </>
  );
};

export default DigitalMarketingPage;
