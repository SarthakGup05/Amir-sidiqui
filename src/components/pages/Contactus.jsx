import React, { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Tstimonials from "../Shared/Tstimonials";
import Footer from "../layout/Footer";

const Contactus = () => {
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
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div id="progress-bar" className="h-1 bg-pink-600"></div>
      </div>
      <Navbar />

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h6 className="text-gray-600">Get in touch</h6>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
              Contact Us
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-12"></div>

          {/* Contact Form */}
          <div className="flex justify-center">
            <div className="w-full sm:w-3/4 lg:w-1/2 bg-white shadow-md rounded-lg p-6 sm:p-8">
              <h5 className="text-2xl font-semibold mb-6 text-center">
                Get in touch!
              </h5>
              <form method="post" className="space-y-4">
                <div className="alert alert-success contact__msg hidden">
                  Your message was sent successfully.
                </div>
                <div className="space-y-4">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="city"
                      type="text"
                      placeholder="City *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      id="select_id"
                      name="makeup"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="0">Choose your Makeup</option>
                      <option value="1">Celebrity/Bollywood Makeup</option>
                      <option value="2">Reception/Wedding Makeup</option>
                      <option value="3">Party/Cocktail/Haldi Makeup</option>
                      <option value="4">Destination wedding Makeup</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      name="venue"
                      type="text"
                      placeholder="Enter Your Wedding Venue *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={4}
                      placeholder="How can we help you? Feel free to get in touch! *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-800 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Get in touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Tstimonials />
      <Footer />
    </>
  );
};

export default Contactus;
