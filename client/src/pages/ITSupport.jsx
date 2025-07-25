import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import itSupportVideo from '/src/assets/BannerITSupport.mp4';

const ITSupportPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={itSupportVideo}
        title="IT Support Services"
        subtitle="Reliable, Scalable, and Secure IT Solutions for Your Business"
      />
      {/* Additional content here */}
    </>
  );
};

export default ITSupportPage;
