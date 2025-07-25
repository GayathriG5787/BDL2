import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import digitalMarketingVideo from '../assets/videos/Bannerdigital.mp4';


const DigitalMarketingPage = () => {

    const services = [
    { title: "Search Engine Marketing", icon: "bi-search", description: "Improve rankings with paid ad strategies." },
    { title: "Email Campaigns", icon: "bi-envelope", description: "Targeted email marketing for your audience." },
    { title: "SEO Services", icon: "bi-graph-up", description: "Boost visibility with organic search strategies." },
    { title: "Content Marketing", icon: "bi-journal-text", description: "Drive engagement through valuable content." },
    { title: "Conversion Optimization", icon: "bi-speedometer2", description: "Turn traffic into loyal customers." },
    { title: "Analytics & Reporting", icon: "bi-pie-chart", description: "Measure and refine with performance data." },
  ];

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
        <ServiceFeatureSection sectionTitle="What We Offer in Digital Marketing" services={services} />
    </>
  );
};

export default DigitalMarketingPage;
