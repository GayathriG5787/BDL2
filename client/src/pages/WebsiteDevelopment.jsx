import React from 'react'
import websiteDevVideo from '../assets/videos/BannerWebDev.mp4';
import VideoBannerServices from '../components/VideoBannerServices';
import WebDevDesc from '../components/WebDevDesc'
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
        <WebDevDesc />
        <WebDevServices />
        <WebsiteDevPricing />
    </div>
  )
}

export default WebsiteDevelopment