import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Tstimonials from "./Shared/Tstimonials";
import Banner from "./Banner";

const About = () => {
  const sliderSettings = {
    dots: false,
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
          infinite: true,
          dots: false,
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
    <div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div id="progress-bar" className="h-1 bg-pink-600"></div>
      </div>
      <Navbar />
      <Banner />
      <section className="about section-padding py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h6 className="text-pink-600 text-lg font-semibold mb-2">
                Makeup Artist
              </h6>
              <h1 className="text-4xl font-bold mb-4">Aamir Siddiqui</h1>
              <p className="mb-6">
                Hello, I'm Aamir, a passionate and certified makeup artist with
                a flair for creating stunning transformations. Having completed
                a comprehensive professional makeup course, I've honed my skills
                in various makeup styles, specializing in Bollywood/celebrity
                makeup, wedding makeup, destination wedding makeup, and bridal
                makeup. My artistic journey has taken me across India, allowing
                me to bring diverse cultural aesthetics and the latest beauty
                trends to my clients. Whether it's a glamorous red-carpet look
                or a timeless bridal makeover, my goal is to enhance your
                natural beauty and ensure you shine on your special day.
              </p>
              <p className="mb-6">
                With a keen eye for detail and a love for the latest trends, I
                pride myself on using high-quality products and innovative
                techniques to achieve flawless results. From contouring and
                highlighting to perfecting the art of the smokey eye, my
                expertise covers a wide range of contemporary and classic
                styles. Let me be a part of your beauty journey, creating
                memorable looks that reflect your unique personality and style.
                Join me in exploring the world of makeup artistry, where every
                brushstroke tells a story and every look is a masterpiece.
              </p>
              <ul className="list-none mb-6 space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-check text-pink-600 mr-2"></i>
                  <span>Bollywood/Celebrity Makeup</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-pink-600 mr-2"></i>
                  <span>Wedding Makeup</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-pink-600 mr-2"></i>
                  <span>Indian Traditional Makeup</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-pink-600 mr-2"></i>
                  <span>Destination Wedding Makeup</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-pink-600 mr-2"></i>
                  <span>Bridal Makeup</span>
                </li>
              </ul>
              <div className="clients mb-6">
                <Slider {...sliderSettings}>
                  <div className="px-2">
                    <img
                      src="../../../assets/images/clients/1.png"
                      alt="Client 1"
                      className="w-full"
                    />
                  </div>
                  <div className="px-2">
                    <img
                      src="../../../assets/images/clients/2.png"
                      alt="Client 2"
                      className="w-full"
                    />
                  </div>
                  <div className="px-2">
                    <img
                      src="../../../assets/images/clients/3.png"
                      alt="Client 3"
                      className="w-full"
                    />
                  </div>
                  <div className="px-2">
                    <img
                      src="../../../assets/images/clients/4.png"
                      alt="Client 4"
                      className="w-full"
                    />
                  </div>
                  <div className="px-2">
                    <img
                      src="../../../assets/images/clients/5.png"
                      alt="Client 5"
                      className="w-full"
                    />
                  </div>
                  <div className="px-2">
                    <img
                      src="../../../assets/images/clients/6.png"
                      alt="Client 6"
                      className="w-full"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <div className="profile-img">
                <img
                  src="../../../assets/images/about.jpg"
                  alt="Aamir Siddiqui"
                  className="w-full rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section-padding py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="text-pink-600 text-lg font-semibold mb-2">My Top</h6>
            <h1 className="text-4xl font-bold">Makeup Skills</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2">
              <div className="mb-4">
                <p className="skill-title flex justify-between items-center">
                  Bollywood/Celebrity Makeup
                  <span className="percent">90%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-pink-600 h-full" style={{ width: "90%" }} />
                </div>
              </div>
              <div className="mb-4">
                <p className="skill-title flex justify-between items-center">
                  Wedding Makeup
                  <span className="percent">80%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-pink-600 h-full" style={{ width: "80%" }} />
                </div>
              </div>
              <div className="mb-4">
                <p className="skill-title flex justify-between items-center">
                  Indian Traditional Makeup
                  <span className="percent">85%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-pink-600 h-full" style={{ width: "85%" }} />
                </div>
              </div>
              <div className="mb-4">
                <p className="skill-title flex justify-between items-center">
                  Bridal Makeup
                  <span className="percent">87%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-pink-600 h-full" style={{ width: "87%" }} />
                </div>
              </div>
              <div className="mb-4">
                <p className="skill-title flex justify-between items-center">
                  Destination Wedding Makeup
                  <span className="percent">95%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-pink-600 h-full" style={{ width: "95%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tstimonials />
      <Footer />
    </div>
  );
};

export default About;
