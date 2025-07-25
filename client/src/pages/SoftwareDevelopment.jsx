import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import softwareDevVideo from '../assets/videos/BannerSoftDev.mp4';


const SoftwareDevelopmentPage = () => {

    const services = [
    { title: "Custom Software", icon: "bi-code-slash", description: "Tailor-made software to fit your needs." },
    { title: "API Development", icon: "bi-plug", description: "Robust and scalable API integrations." },
    { title: "Cloud Applications", icon: "bi-cloud-upload", description: "Modern apps that scale with your business." },
    { title: "Desktop Applications", icon: "bi-laptop", description: "Reliable and efficient desktop solutions." },
    { title: "Maintenance & Support", icon: "bi-tools", description: "Bug fixes, updates, and ongoing assistance." },
    { title: "Agile Development", icon: "bi-arrow-repeat", description: "Flexible development with iterative delivery." },
  ];

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
      <ServiceFeatureSection sectionTitle="What We Offer in Software Development" services={services} />
    </>
  );
};

export default SoftwareDevelopmentPage;
