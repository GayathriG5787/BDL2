import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import softwareDevVideo from '../assets/videos/BannerSoftDev.mp4';

const SoftwareDevelopmentPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={softwareDevVideo}
        title="Software Development Services"
        subtitle="Tailored Software Solutions to Power Innovation and Growth"
      />
      {/* Additional content here */}
    </>
  );
};

export default SoftwareDevelopmentPage;
