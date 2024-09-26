import React from "react";
import Navbar from "../layout/Navbar";
import About from "../About";
import Footer from "../layout/Footer";
import Tstimonials from "../Shared/Tstimonials";

const BlogPage = () => {
  return (
    <>
    <Navbar />
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
    <div className="row mb-45">
      <div className="col-md-6 mb-15">
        <div className="item">
          <div className="wrap">
            <div className="img">
              {" "}
              <img
                src="../../../assets/images/blog/1.jpg"
                className="img-fluid rounded-1"
              />{" "}
            </div>
            <div className="title">
              <a href="post.html">
                <h6>Bridal</h6>
                <h4>Wedding Hairstyle Tips</h4>{" "}
                <i className="icon fa-light fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-15">
        <div className="item">
          <div className="wrap">
            <div className="img">
              {" "}
              <img
                src="../../../assets/images/blog/2.jpg"
                className="img-fluid rounded-1"
              />{" "}
            </div>
            <div className="title">
              <a href="post.html">
                <h6>Hair Makeup</h6>
                <h4>Hair Care &amp; Styling Tips</h4>{" "}
                <i className="icon fa-light fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-15">
        <div className="item">
          <div className="wrap">
            <div className="img">
              {" "}
              <img
                src="../../../assets/images/blog/3.jpg"
                className="img-fluid rounded-1"
              />{" "}
            </div>
            <div className="title">
              <a href="post.html">
                <h6>Makeup</h6>
                <h4>Birthday Party Ideas</h4>{" "}
                <i className="icon fa-light fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-15">
        <div className="item">
          <div className="wrap">
            <div className="img">
              {" "}
              <img
                src="../../../assets/images/blog/4.jpg"
                className="img-fluid rounded-1"
              />{" "}
            </div>
            <div className="title">
              <a href="post.html">
                <h6>Face Makeup</h6>
                <h4>Tips for Face Makeup</h4>{" "}
                <i className="icon fa-light fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Tstimonials/>
<Footer/>
    </>
  );
};

export default BlogPage;
