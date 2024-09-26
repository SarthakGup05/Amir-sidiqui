import React from "react";

import Banner from "../Banner";
import About from "../About";
import Tstimonials from "../Shared/Tstimonials";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Looks from "../Shared/Looks";
import BrandSlider from "../Shared/BrandSlider";
import Youtube from "../Youtube";


const Home = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div id="progress-bar" className="h-1 bg-pink-600"></div>
      </div>
      <Navbar />
      {/* Homepage Default */}
      <Banner />
      <section className="home-default">
     
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="item">
                <div className="view-on-mobile">
                  <h6>Makeup Artist</h6>
                  <h1>Aamir Siddiqui</h1>
                </div>
                <div className="transform-banner position-relative">
                  {" "}
                  <img
                    className="img home-default-img home-default-img-left wow"
                    src="../../../assets/images/slider.jpg"
                    alt=""
                  />{" "}
                </div>
                <div className="home-default-cont home-default-cont-right">
                  <div className="home-default-cont-absolute home-default-cont-absolute-right">
                    <div className="not-view-on-mobile">
                      <h6 className="wow" data-splitting="">
                        Makeup Artist
                      </h6>
                      <h1 className="wow" data-splitting="">
                        Aamir Siddiqui
                      </h1>
                    </div>
                    <div className="home-default-cont-text">
                      <p className="wow" data-splitting="">
                        Hello, I'm Aamir, a passionate and certified makeup
                        artist with a flair for creating stunning
                        transformations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* divider line */}
      <div className="line-vr-section" />

      {/* <section className="services section-padding">
        <div className="container">
          <div className="row mb-45">
            <div className="col-md-12 text-center">
              <h6 className="wow" data-splitting="">
                Looks That I Provide
              </h6>
              <h1 className="wow" data-splitting="">
                Our Looks
              </h1>
            </div>
          </div>
        </div>
        <div className="full-width">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                loop={true}
                autoplay={true}
                spaceBetween={10}
                slidesPerView={4}
                className="swiper-container"
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide className="item">
                  <div className="wrap">
                    <div className="img">
                      <img
                        src="/assets/images/Amir makeup gellary/2.jpg"
                        className="img-fluid rounded-1"
                        alt="Hair Makeup"
                      />
                    </div>
                    <div className="text">
                      <h4>bollywood/Celebrity Makeup</h4>
                      <p>Discover</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <div className="wrap">
                    <div className="img">
                      <img
                        src="/assets/images/Amir makeup gellary/r3.jpg"
                        className="img-fluid rounded-1"
                        alt="Eye Makeup"
                      />
                    </div>
                    <div className="text">
                      <a href="/gallery">
                        <h4>
                          Indian Tredtional <br /> Makeup
                        </h4>
                        <p>Discover</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <div className="wrap">
                    <div className="img">
                      <img
                        src="/assets/images/Amir makeup gellary/b2.jpg"
                        className="img-fluid rounded-1"
                        alt="Wedding Makeup"
                      />
                    </div>
                    <div className="text">
                      <a href="/gallery">
                        <h4>Wedding Makeup</h4>
                        <p>Discover</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <div className="wrap">
                    <div className="img">
                      <img
                        src="/assets/images/Amir makeup gellary/b5.jpg"
                        className="img-fluid rounded-1"
                        alt="Effect Makeup"
                      />
                    </div>
                    <div className="text">
                      <a href="/gallery">
                        <h4>
                          {" "}
                          Destination Wedding <br /> Makeup
                        </h4>
                        <p>Discover</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <div className="wrap">
                    <div className="img">
                      <img
                        src="/assets/images/Amir makeup gellary/b3.jpg"
                        className="img-fluid rounded-1"
                        alt="Face Makeup"
                      />
                    </div>
                    <div className="text">
                      <a href="/gallery">
                        <h4>Fashion Makeup</h4>
                        <p>Discover</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="item">
                  <div className="wrap">
                    <div className="img">
                      <img
                        src="/assets/images/Amir makeup gellary/b1.jpg"
                        className="img-fluid rounded-1"
                        alt="Face Makeup"
                      />
                    </div>
                    <div className="text">
                      <a href="/gallery">
                        <h4>Cocktail/Party Makeup</h4>
                        <p>Discover</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="item"></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}
      <Looks/>
      <Youtube/>
      <BrandSlider width="200px" height="140px"/>
      <Tstimonials />
      <Footer />
    </>
  );
};

export default Home;
