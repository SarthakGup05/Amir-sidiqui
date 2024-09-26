import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Tstimonials from "../Shared/Tstimonials";

const Dtlblog = () => {
  return (
    <div>
        <Navbar/>
      <section className="blog section-padding">
        <div className="container">
          <div className="row mb-45">
            <div className="col-md-12">
              <h6>Recent Articles</h6>
              <h1 className="wow" data-splitting="">
                Latest News
              </h1>
            </div>
          </div>
          <div className="row">
            {/* blog content */}
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <div className="img">
                      <a href="post.html">
                        {" "}
                        <img
                          src="../../../assets/images/slider/4.jpg"
                          className="rounded-1"
                          alt=""
                        />{" "}
                      </a>
                      <div className="date">
                        <a href="post.html">
                          {" "}
                          <span>Apr</span> <i>14</i>{" "}
                        </a>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="category">
                        <a href="blog.html">
                          <div>Blog</div>
                        </a>
                        <div className="divider" />
                        <div>Bridal</div>
                      </div>
                      <h4>
                        <a href="post.html">Wedding Hairstyle Tips</a>
                      </h4>
                      <p>
                        Makeup potenti fringilla pretium ipsum non blandit.
                        Vivamus eget nisi non mi iaculis iaculis imserie uisero
                        sevin elentesque habitant morbi tristique senectus et
                        netus et malesuada fames actur sisenestion mauris
                        suscipit mis nec esta a in the miss tincidunt eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <div className="img">
                      <a href="post.html">
                        {" "}
                        <img
                          src="../../../assets/images/slider/5.jpg"
                          className="rounded-1"
                          alt=""
                        />{" "}
                      </a>
                      <div className="date">
                        <a href="post.html">
                          {" "}
                          <span>Apr</span> <i>14</i>{" "}
                        </a>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="category">
                        <a href="blog.html">
                          <div>Blog</div>
                        </a>
                        <div className="divider" />
                        <div>Hair Makeup</div>
                      </div>
                      <h4>
                        <a href="post.html">Hair Care &amp; Styling Tips</a>
                      </h4>
                      <p>
                        Makeup potenti fringilla pretium ipsum non blandit.
                        Vivamus eget nisi non mi iaculis iaculis imserie uisero
                        sevin elentesque habitant morbi tristique senectus et
                        netus et malesuada fames actur sisenestion mauris
                        suscipit mis nec esta a in the miss tincidunt eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <div className="img">
                      <a href="post.html">
                        {" "}
                        <img
                          src="../../../assets/images/slider/3.jpg"
                          className="rounded-1"
                          alt=""
                        />{" "}
                      </a>
                      <div className="date">
                        <a href="post.html">
                          {" "}
                          <span>Apr</span> <i>14</i>{" "}
                        </a>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="category">
                        <a href="blog.html">
                          <div>Blog</div>
                        </a>
                        <div className="divider" />
                        <div>Hair Makeup</div>
                      </div>
                      <h4>
                        <a href="post.html">Tips for Hair Makeup</a>
                      </h4>
                      <p>
                        Makeup potenti fringilla pretium ipsum non blandit.
                        Vivamus eget nisi non mi iaculis iaculis imserie uisero
                        sevin elentesque habitant morbi tristique senectus et
                        netus et malesuada fames actur sisenestion mauris
                        suscipit mis nec esta a in the miss tincidunt eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* pagination */}
                <div className="col-md-12">
                  <ul className="pagination-wrap mb-30 mt-30">
                    <li>
                      <a href="blog2.html#">
                        <i className="fa-light fa-angle-left" />
                      </a>
                    </li>
                    <li>
                      <a href="blog2.html#">1</a>
                    </li>
                    <li>
                      <a href="blog2.html#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="blog2.html#">3</a>
                    </li>
                    <li>
                      <a href="blog2.html#">
                        <i className="fa-light fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* blog sidebar */}
            <div className="col-md-4">
              <div className="row blog-sidebar">
                <div className="col-md-12">
                  <div className="item">
                    <div className="search">
                      <form>
                        <input
                          type="text"
                          name="search"
                          placeholder="Type here ..."
                        />
                        <button type="submit">
                          <i
                            className="fa-light fa-magnifying-glass"
                            aria-hidden="true"
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="item">
                    <div className="text">
                      {" "}
                      <h5>Recent Posts</h5>{" "}
                    </div>
                    <ul className="recent">
                      <li>
                        <div className="thum">
                          {" "}
                          <img
                            src="../../../assets/images/slider/4.jpg"
                            className="rounded-1"
                            alt=""
                          />{" "}
                        </div>{" "}
                        <a href="post.html">Wedding Hairstyle Tips</a>
                      </li>
                      <li>
                        <div className="thum">
                          {" "}
                          <img
                            src="../../../assets/images/slider/5.jpg"
                            className="rounded-1"
                            alt=""
                          />{" "}
                        </div>{" "}
                        <a href="post.html">Hair Care &amp; Styling Tips</a>
                      </li>
                      <li>
                        <div className="thum">
                          {" "}
                          <img
                            src="../../../assets/images/slider/3.jpg"
                            className="rounded-1"
                            alt=""
                          />{" "}
                        </div>{" "}
                        <a href="post.html">Tips for Hair Makeup</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="item">
                    <div className="text">
                      {" "}
                      <h5>Archives</h5>{" "}
                    </div>
                    <ul>
                      <li>
                        <a href="#">December 2024</a>
                      </li>
                      <li>
                        <a href="#">November 2024</a>
                      </li>
                      <li>
                        <a href="#">October 2024</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="item">
                    <div className="text">
                      {" "}
                      <h5>Categories</h5>{" "}
                    </div>
                    <ul>
                      <li>
                        <a href="blog.html">
                          <i className="fa-light fa-angle-right" />
                          Face Makeup
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <i className="fa-light fa-angle-right" />
                          Wedding Makeup
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <i className="fa-light fa-angle-right" />
                          Hair Makeup
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="item">
                    <div className="text">
                      {" "}
                      <h5>Tags</h5>{" "}
                    </div>
                    <ul className="tags">
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Face</a>
                      </li>
                      <li>
                        <a href="#">Wedding</a>
                      </li>
                      <li>
                        <a href="#">Hair</a>
                      </li>
                      <li>
                        <a href="#">Eyebrow</a>
                      </li>
                      <li>
                        <a href="#">Bridal</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tstimonials/>
      <Footer/>
    </div>
  );
};

export default Dtlblog;
