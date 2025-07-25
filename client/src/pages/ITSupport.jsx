import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import itSupportVideo from '../assets/videos/BannerITSupport.mp4';


const ITSupportPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={itSupportVideo}
        title="IT Support Services"
        subtitle="Reliable, Scalable, and Secure IT Solutions for Your Business"
      />
      <ServiceDescription
          title="Reliable IT Support for Seamless Operations"
          description="We provide 24/7 technical assistance and infrastructure support to ensure your business runs smoothly. From troubleshooting to proactive monitoring, our team is your tech backbone."
          features={[
            "24/7 Helpdesk Support",
            "Network Monitoring",
            "Hardware & Software Maintenance",
            "Cybersecurity Solutions"
          ]}
          image="https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg"
        />

    </>
  );
};

export default ITSupportPage;
