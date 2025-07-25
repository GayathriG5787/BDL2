import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import socialMediaVideo from '../assets/BannerSocialMedia.mp4';

const SocialMediaManagementPage = () => {
  return (
    <>
      <VideoBannerServices
        videoSrc={socialMediaVideo}
        title="Social Media Management"
        subtitle="Engage, Grow, and Influence Your Audience Across Platforms"
      />
      {/* Additional content here */}
    </>
  );
};

export default SocialMediaManagementPage;
