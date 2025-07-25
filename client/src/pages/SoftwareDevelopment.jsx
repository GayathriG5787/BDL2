import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import softwareDevVideo from '../assets/videos/BannerSoftDev.mp4';


const SoftwareDevelopmentPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={softwareDevVideo}
        title="Software Development Services"
        subtitle="Tailored Software Solutions to Power Innovation and Growth"
      />
      <ServiceDescription
          title="Innovative Software Solutions for Modern Challenges"
          description="From SaaS platforms to enterprise applications, we design and build scalable software that aligns with your unique business needs and user experience goals."
          features={[
            "Custom Application Development",
            "API Integrations",
            "Agile & Scalable Architecture",
            "Cross-Platform Compatibility"
          ]}
          image="https://images.unsplash.com/photo-1518770660439-4636190af475"
        />

    </>
  );
};

export default SoftwareDevelopmentPage;
