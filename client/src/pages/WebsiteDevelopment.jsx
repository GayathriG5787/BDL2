import React from 'react'
import websiteDevVideo from '../assets/videos/BannerWebDev.mp4';
import VideoBannerServices from '../components/VideoBannerServices';
import ServiceDescription from '../components/ServiceDescription.jsx';
import WebDevServices from '../components/WebDevServices'
import WebsiteDevPricing from '../components/WebDevPricing'


const WebsiteDevelopment = () => {
  return (
    <div>
        <VideoBannerServices
        videoSrc={websiteDevVideo}
        title="Website Development Services"
        subtitle="Custom, Responsive, and High-Performance Websites"
      />
        <ServiceDescription
            title="Crafting Modern, Responsive Websites"
            description="At Bharat Digital Limited, we specialize in creating visually stunning, fast, and user-friendly websites tailored to your business goals. Whether you're launching a portfolio, startup, or enterprise solution, we bring your digital presence to life with modern tools and scalable solutions."
            features={[
              "Custom Design & Branding",
              "Mobile-First Responsive Layouts",
              "SEO-Friendly Development",
              "CMS & E-Commerce Solutions"
            ]}
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
          />
        <WebDevServices />
        <WebsiteDevPricing />
    </div>
  )
}

export default WebsiteDevelopment