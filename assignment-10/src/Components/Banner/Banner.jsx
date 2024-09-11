import React from 'react';

const Banner = () => {
    return (
    <div className="carousel w-full h-full">
  <div id="slide1" className="carousel-item relative w-full" style={{
    backgroundImage: "url(https://i.ibb.co.com/K6gRRby/woman-painting-picture-sitting-grass-1157-2317.jpg)", backgroundSize: "cover", backgroundRepeat:"no-repeat", height:"600px"
  }}>
   <div>
    <h1 className='text-5xl'>lorem lorem lorem lorem</h1>
   </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full" style={{
    backgroundImage: "url(https://i.ibb.co.com/5Gpxyfz/woman-couch-with-painting-23-2147781589.jpg)", backgroundSize: "cover", backgroundRepeat:"no-repeat", height:"600px"
  }}>
    
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full" style={{
    backgroundImage: "url(https://i.ibb.co.com/wptBRG0/human-hand-painting-beautiful-scenery-seen-paper-23-2148118155.jpg)", backgroundSize: "cover", backgroundRepeat:"no-repeat", height:"600px"
  }}>
    
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full" style={{
    backgroundImage: "url(https://i.ibb.co.com/1KXBMGv/man-is-painting-landscape-with-mountains-background-1261236-9785.jpg)"
  }}>
    
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full" style={{
    backgroundImage: "url(https://i.ibb.co.com/5KLGXfm/close-up-person-working-engraving-23-2149286579.jpg)", 
  }}>
    
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full" style={{
    backgroundImage: "url(https://i.ibb.co.com/Mg92TTP/two-artists-painting-canvas-1308-34625.jpg)", backgroundSize: "cover", backgroundRepeat:"no-repeat", height:"400px"
  }}>
    
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;