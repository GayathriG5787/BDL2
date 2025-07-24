import React from "react";

const VideoBanner = () => {
  return (
    <div className="position-relative">
      <video
        className="w-100"
        autoPlay
        muted
        loop
        playsInline
        poster="https://via.placeholder.com/1920x1080?text=Website+Development"
        style={{ objectFit: "cover", height: "100vh" }}
      >
        <source
          src="https://player.vimeo.com/external/449973265.sd.mp4?s=31e3f9d78b024944f0b2743a8ff42aa84415730f&profile_id=164&oauth2_token_id=57447761
"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

            <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
        style={{ zIndex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
>
        <h1 className="display-4 fw-bold">Website Development</h1>
        <p className="lead">
          We craft responsive, high-performance websites tailored to your needs.
        </p>
        <button className="btn btn-primary btn-lg mt-3">Get a Quote</button>
      </div>
    </div>
  );
};

export default VideoBanner;
