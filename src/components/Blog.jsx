import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Blog = () => {
  return (
    <div>
      <>
        <div className="line-vr-section" />
        {/* Blog Home */}
        <section className="blog-home section-padding">
          <div className="container">
            <div className="row mb-45">
              <div className="col-md-12 text-center">
                <h6 className="wow" data-splitting="">
                  Makeup Trends
                </h6>
                <h1 className="wow" data-splitting="">
                  Read Blog
                </h1>
              </div>
            </div>
          </div>
          <div className="full-width">
            <div className="row">
              <div className="col-md-12">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={3}
                  loop={true}
                  className="swiper-container"
                >
                  <SwiperSlide className="item">
                    <div className="wrap">
                      <div className="img">
                        <img
                          src="../../../assets/images/blog/1.jpg"
                          className="img-fluid rounded-1"
                          alt="Bridal"
                        />
                      </div>
                      <div className="title">
                        <a href="post.html">
                          <h6>Bridal</h6>
                          <h4>Wedding Hairstyle Tips</h4>
                          <i className="icon fa-light fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="wrap">
                      <div className="img">
                        <img
                          src="../../../assets/images/blog/2.jpg"
                          className="img-fluid rounded-1"
                          alt="Hair Makeup"
                        />
                      </div>
                      <div className="title">
                        <a href="post.html">
                          <h6>Hair Makeup</h6>
                          <h4>Hair Care &amp; Styling Tips</h4>
                          <i className="icon fa-light fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="wrap">
                      <div className="img">
                        <img
                          src="../../../assets/images/blog/3.jpg"
                          className="img-fluid rounded-1"
                          alt="Makeup"
                        />
                      </div>
                      <div className="title">
                        <a href="post.html">
                          <h6>Makeup</h6>
                          <h4>Birthday Party Ideas</h4>
                          <i className="icon fa-light fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="wrap">
                      <div className="img">
                        <img
                          src="../../../assets/images/blog/4.jpg"
                          className="img-fluid rounded-1"
                          alt="Face Makeup"
                        />
                      </div>
                      <div className="title">
                        <a href="post.html">
                          <h6>Face Makeup</h6>
                          <h4>Tips for Face Makeup</h4>
                          <i className="icon fa-light fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="wrap">
                      <div className="img">
                        <img
                          src="../../../assets/images/blog/5.jpg"
                          className="img-fluid rounded-1"
                          alt="Makeup"
                        />
                      </div>
                      <div className="title">
                        <a href="post.html">
                          <h6>Makeup</h6>
                          <h4>Make Up Techniques</h4>
                          <i className="icon fa-light fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Blog;
