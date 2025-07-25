import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import socialMediaVideo from '../assets/videos/BannerSocialMedia.mp4';

const SocialMediaManagementPage = () => {

    const services = [
    { title: "Content Creation", icon: "bi-pencil-square", description: "Engaging graphics and videos for your brand." },
    { title: "Post Scheduling", icon: "bi-calendar-week", description: "Automated and timely social media updates." },
    { title: "Audience Engagement", icon: "bi-chat-dots", description: "Real-time response to followers and messages." },
    { title: "Analytics Reports", icon: "bi-bar-chart", description: "Performance tracking and growth insights." },
    { title: "Ad Campaigns", icon: "bi-megaphone", description: "Targeted ads to boost reach and ROI." },
    { title: "Platform Optimization", icon: "bi-sliders", description: "Optimized profiles for every major platform." },
  ];

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
        <ServiceFeatureSection sectionTitle="What We Offer in Social Media Management" services={services} />
    </>
  );
};

export default SocialMediaManagementPage;
