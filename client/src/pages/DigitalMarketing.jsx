import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import digitalMarketingVideo from '../assets/videos/Bannerdigital.mp4';


const DigitalMarketingPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={digitalMarketingVideo}
        title="Digital Marketing Services"
        subtitle="Boost Visibility, Drive Traffic, and Maximize ROI"
      />
      <ServiceDescription
          title="Strategic Digital Marketing to Grow Your Brand"
          description="We help you build your online presence, reach the right audience, and turn clicks into customers through data-driven marketing strategies."
          features={[
            "SEO & SEM Campaigns",
            "Content & Email Marketing",
            "Google & Meta Ads",
            "Analytics & ROI Tracking"
          ]}
          image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        />

    </>
  );
};

export default DigitalMarketingPage;
