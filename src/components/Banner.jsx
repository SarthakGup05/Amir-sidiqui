import React from "react";
import Videobg from "../components/makeup.webm";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        src={Videobg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-8 bg-black bg-opacity-50">
        <h5
          className="text-sm font-light mb-0 uppercase tracking-widest text-pink-500 animate__animated animate__fadeInUp"
          style={{ paddingLeft: "2rem" }}
        >
          Makeup Artist
        </h5>
        <h1 className="text-4xl font-bold animate__animated animate__fadeInUp">
          Aamir Siddiqui
        </h1>
        <a href="/contact" className="mt-4">
          <button
            className="px-4 py-2 bg-pink-500 hover:bg-pink-700 text-white font-medium uppercase rounded-full animate__animated animate__fadeInUp relative left-6"
            data-scroll-nav="1"
          >
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
