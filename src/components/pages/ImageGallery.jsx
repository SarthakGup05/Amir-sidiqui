import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Gallery.css";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Tstimonials from "../Shared/Tstimonials";


const ImageGallery = () => {
  const [filter, setFilter] = useState("*");

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const images = [
    // { category: "Wedding Makeup", src: "/assets/images/Amir makeup gellary/r2.jpg" },
    // { category: "Wedding Makeup", src: "/assets/images/Amir makeup gellary/r3.jpg" },
    // { category: "Wedding Makeup", src: "/assets/images/Amir makeup gellary/r1.jpg" },
    // { category: "Wedding Makeup", src: "/assets/images/Amir makeup gellary/r4.jpg" },
    // Add more images to the "Wedding Makeup" category

    // { category: "celebrity", src: "/assets/images/Amir makeup gellary/2.jpg" },
    // { category: "celebrity", src: "/assets/images/Amir makeup gellary/f1.jpg" },
    // Add more images to the "celebrity" category

    { category: "wedding", src: "/assets/images/Amir makeup gellary/b2.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/b1.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/b3.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/b5.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w1.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w2.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w3.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w4.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w5.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w6.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w7.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/w9.jpg" },
    // { category: "wedding", src: "/assets/images/Amir makeup gellary/e2.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/e1.jpg" },
    { category: "wedding", src: "/assets/images/Amir makeup gellary/e3.jpg" },

    // Add more images to the "bridal" category
    { category: "traditional", src: "/assets/images/Amir makeup gellary/t1.jpg" },
    // { category: "traditional", src: "/assets/images/Amir makeup gellary/t2.jpg" },
    { category: "traditional", src: "/assets/images/Amir makeup gellary/t3.jpg" },
    { category: "traditional", src: "/assets/images/Amir makeup gellary/t4.jpg" },


    // Add more images to other categories similarly
    { category: "party", src: "/assets/images/Amir makeup gellary/c1.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/c2.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/c6.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/c7.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/c9.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/1y.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/2y.jpg" },
   
    { category: "party", src: "/assets/images/Amir makeup gellary/p1.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/p2.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/p3.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/p4.jpg" },
    { category: "party", src: "/assets/images/Amir makeup gellary/p5.jpg" },

    { category: "reception", src: "/assets/images/Amir makeup gellary/r1.jpg" },
    { category: "reception", src: "/assets/images/Amir makeup gellary/r2.jpg" },
    { category: "reception", src: "/assets/images/Amir makeup gellary/r3.jpg" },
    { category: "reception", src: "/assets/images/Amir makeup gellary/r4.jpg" },
    { category: "reception", src: "/assets/images/Amir makeup gellary/r5.jpg" },
    { category: "reception", src: "/assets/images/Amir makeup gellary/r6.jpg" },
    { category: "reception", src: "/assets/images/Amir makeup gellary/r7.jpg" },
    { category: "reception", src: "/assets/images/Amir makeup gellary/c8.jpg" },

    { category: "destination", src: "/assets/images/Amir makeup gellary/v1.jpg" },
    { category: "destination", src: "/assets/images/Amir makeup gellary/v2.jpg" },
    { category: "destination", src: "/assets/images/Amir makeup gellary/v3.jpg" },
    { category: "destination", src: "/assets/images/Amir makeup gellary/v5.jpg" },
   
  ];

  const categories = [
    { name: "All", filter: "*" },
     { name: "Reception Makeup", filter: "reception" },
    { name: "Cocktail/Party Makeup", filter: "party" },
     { name: "Indian Traditional Makeup", filter: "traditional" },
    { name: "Wedding Makeup", filter: "wedding" },
     { name: "venue Makeup", filter: "destination" },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div id="progress-bar" className="h-1 bg-pink-600"></div>
      </div>
      <Navbar />
      <section className="section-padding portfolio-section">
        <div className="container">
          <div className="row mb-25 text-center">
            <div className="col-md-12">
              <h6 className="wow" data-splitting="">
                Our Portfolio
              </h6>
              <h1 className="wow" data-splitting="">
                Image Gallery
              </h1>
            </div>
          </div>
          <div className="portfolio-tab">
            <ul id="filters" className="clearfix">
              {categories.map((category) => (
                <li
                  key={category.filter}
                  className={`filter ${
                    filter === category.filter ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(category.filter)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images
              .filter((image) => filter === "*" || image.category === filter)
              .map((image, index) => (
                <div
                  key={index}
                  className={`portfolio-wrapper portfolio ${image.category}`}
                >
                  <a
                    href={image.src}
                    title=""
                    className="gallery-masonry-item-img-link img-zoom"
                  >
                    <LazyLoadImage
                      alt={image.category}
                      src={image.src}
                      width="100%"
                      height={300}
                      effect="opacity" // Optional: Add transition effect
                    />
                    <div className="label">
                      <div className="label-bg"></div>
                      <div className="label-text" style={{
                        fontFamily: 'sans-serif',
                        fontWeight: '500',
                        fontStyle: 'italic'
                      }}>
                        <span className="text-category">{image.category}</span>
                        
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </Masonry>
        </div>
      </section>
      <Tstimonials />
      <Footer />
    </div>
  );
};

export default ImageGallery;
