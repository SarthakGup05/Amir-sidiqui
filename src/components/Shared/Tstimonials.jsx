import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonialsData = [
  {
    image: "./assets/images/Testimonials/12.jpg",
    name: "Tanu",
    testimonial: `Had a lovely experience at Aamir Makeup. The staff is sweet & cooperative.
They help out with whatever issues you have & make you feel comfortable. Top-notch services, best in Lucknow.`,
  },
  {
    image: "./assets/images/Testimonials/13.jpg",
    name: "Kritika",
    testimonial:
      "I have always been a customer of Aamir Makeup and it has always been a wonderful experience of getting groomed there. Apart from personalized service, I would like to applaud Staff for making customers just feel like a homely experience. Her management of salon, staff and customer is amazing.",
  },
  {
    image: "./assets/images/Testimonials/14.jpg",
    name: "Arpita",
    testimonial:
      "They are extremely professional and cooperative. They did an amazing job and kept the makeup as I had envisioned. A special thanks to the manager. She is personally invested in making the bride comfortable. Highly recommended for brides looking for good-quality makeup.",
  },
  {
    image: "./assets/images/Testimonials/15.jpg",
    name: "Neha",
    testimonial:
      "One of the best makeup salon in Lucknow have got my engagement and wedding makeup done from here and it was awesome..thank you guys",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section bg-black text-white py-16">
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h5 className="text-4xl font-bold mb-2">TESTIMONIALS</h5>
          <p className="text-gray-400"></p>
        </div>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item-container">
              <div className="testimonial-item bg-white text-black p-6 font-semibold rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-3">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full border-4 border-gray-300"
                  />
                </div>
                <p className="mb-4 text-center">{testimonial.testimonial}</p>
                <p className="text-center font-bold text-yellow-600">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Testimonials;
