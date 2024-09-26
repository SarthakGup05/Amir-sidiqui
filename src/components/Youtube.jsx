import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Youtube.css';

const Youtube = () => {
  const videos = [
    {
      id: 1,
      link: 'https://www.youtube.com/embed/y8fhjTTmTns?autoplay=1&mute=1',
      thumbnail: 'https://img.youtube.com/vi/y8fhjTTmTns/maxresdefault.jpg',
      title: 'Video 1',
      category: ''
    },
    {
      id: 2,
      link: 'https://www.youtube.com/embed/Al2d-ATCzLc?autoplay=1&mute=1',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg',
      title: 'Video 2',
      category: ''
    },
   
    {
      id: 4,
      link: 'https://youtube.com/embed/veTyTRjV5Es?autoplay=1&mute=1',
      thumbnail: 'https://i.ytimg.com/vi/Al2d-ATCzLc/maxresdefault.jpg',
      title: '',
      category: ''
    }
  ];

  const options = {
    items: 2,
    loop: true,
    autoplay: false,  // autoplay is false because we will handle it on hover
    nav: true,
    dots: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <section className="services section-padding">
        <div className="container">
          <div className="row mb-45">
            <div className="col-md-12 text-center">
              <h6 className="wow" data-splitting="">
            
              </h6>
              <h1 className="wow" data-splitting="">
                Our videos
              </h1>
            </div>
          </div>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {videos.map(video => (
            <div className="item" key={video.id}>
              <div className="">
                <div className="video-container">
                  <iframe
                    src={video.link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                    onMouseEnter={e => e.target.src += "?autoplay=1"}
                    onMouseLeave={e => e.target.src = video.link}
                  ></iframe>
                </div>
                <div className="card-content">
                  <h5 className="card-category">{video.category}</h5>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </section>
    </div>
  );
};

export default Youtube;
