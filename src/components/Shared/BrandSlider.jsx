import React from "react";
import Slider from "react-slick";
import "./BrandSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "/assets/images/Logos/bobbi br.jpg", alt: "Bobbi Brown" },
  { src: "/assets/images/Logos/chanel.jpg", alt: "Chanel" },
  { src: "/assets/images/Logos/cli.jpg", alt: "Clinique" },
  { src: "/assets/images/Logos/CT.jpg", alt: "Charlotte Tilbury" },
  { src: "/assets/images/Logos/dior.jpg", alt: "Dior" },
  { src: "/assets/images/Logos/estee.jpg", alt: "Estee Lauder" },
  { src: "/assets/images/Logos/fbq.jpg", alt: "Fenty Beauty" },
  { src: "/assets/images/Logos/HB.jpg", alt: "Huda Beauty" },
  { src: "/assets/images/Logos/lan.jpg", alt: "Lancome" },
  { src: "/assets/images/Logos/lo.jpg", alt: "L'oreal" },
  { src: "/assets/images/Logos/mac.jpg", alt: "MAC" },
  { src: "/assets/images/Logos/nars.jpg", alt: "NARS" },
  { src: "/assets/images/Logos/nyx.jpg", alt: "NYX" },
  { src: "/assets/images/Logos/sephora.jpg", alt: "Sephora" },
  { src: "/assets/images/Logos/sh.jpg", alt: "Shiseido" },
];

const BrandSlider = ({ width = '100px', height = 'auto' }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-white">
      <div className="title mb-6">
        <h1 className="text-center text-3xl font-bold text-gray-900">Brands We Use</h1>
      </div>
      <div className="overflow-hidden relative">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="p-2">
              <img
                className="logo shadow-lg rounded-lg"
                src={logo.src}
                alt={logo.alt}
                style={{ width, height }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlider;
