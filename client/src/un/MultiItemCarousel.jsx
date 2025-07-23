import React from 'react';

const MultiItemCarousel = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">CSS carousel multiple items per page</h2>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-3">
              <div className="card p-4 text-center" style={{ minWidth: '200px', backgroundColor: '#eee' }}>Item 1</div>
              <div className="card p-4 text-center" style={{ minWidth: '200px', backgroundColor: 'cyan' }}>Item 2</div>
              <div className="card p-4 text-center" style={{ minWidth: '200px', backgroundColor: '#eee' }}>Item 3</div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center gap-3">
              <div className="card p-4 text-center" style={{ minWidth: '200px', backgroundColor: '#eee' }}>Item 4</div>
              <div className="card p-4 text-center" style={{ minWidth: '200px', backgroundColor: 'cyan' }}>Item 5</div>
              <div className="card p-4 text-center" style={{ minWidth: '200px', backgroundColor: '#eee' }}>Item 6</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MultiItemCarousel;
