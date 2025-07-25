import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import socialMediaVideo from '../assets/videos/BannerSocialMedia.mp4';

const SocialMediaManagementPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={socialMediaVideo}
        title="Social Media Management"
        subtitle="Engage, Grow, and Influence Your Audience Across Platforms"
      />
      <ServiceDescription
          title="Grow & Engage Your Community with Social Media"
          description="We manage your social media presence across platforms to maintain brand consistency, improve engagement, and attract new customers."
          features={[
            "Account Setup & Optimization",
            "Post Planning & Scheduling",
            "Audience Engagement",
            "Performance Reporting"
          ]}
          image="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
        />

    </>
  );
};

export default SocialMediaManagementPage;
