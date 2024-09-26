import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./utils/Loader";
import ProgressBar from "./utils/ProgressBar"; // Ensure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/About"));
const BlogPage = lazy(() => import("./components/pages/BlogPage"));
const Contactus = lazy(() => import("./components/pages/Contactus"));
const ImageGallery = lazy(() => import("./components/pages/ImageGallery"));
const Dtlblog = lazy(() => import("./components/pages/Dtlblog"));

function App() {
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
        <BrowserRouter>
          <ProgressBar />
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/portfolio" element={<ImageGallery />} />
              <Route path="/blog2" element={<Dtlblog />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
    
    </>
  );
}

export default App;
