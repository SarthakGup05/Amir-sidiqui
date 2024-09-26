import React from "react";
import { Link } from "react-router-dom";
import "./Looks.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const items = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1",
    imageSrc: "/assets/images/Amir makeup gellary/e3.jpg",
    category: "Wedding Makeup",
    link: "/portfolio",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2",
    imageSrc: "/assets/images/Amir makeup gellary/p3.jpg",
    category: "Party/Cocktail Makeup",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3",
    imageSrc: "/assets/images/Amir makeup gellary/p2.jpg",
    category: "Reception Makeup",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4",
    imageSrc: "/assets/images/Amir makeup gellary/p1.jpg",
    category: "Bollywood/Celebrity",
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is card 5",
    imageSrc: "/assets/images/Amir makeup gellary/r1.jpg",
    category: "Fashion Makeup",
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is card 5",
    imageSrc: "/assets/images/Amir makeup gellary/v1.jpg",
    category: "Venue Makeup",
    link: "/portfolio",
  },
];

const options = {
  items: 3,
  nav: true,
  loop: true,
  margin: 20,
  dots: true,
  autoplay: true, // Enable autoplay
  autoplayTimeout: 3000, // Autoplay interval in milliseconds
  autoplayHoverPause: true, // Pause on hover
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const Looks = () => {
  return (
    <div>
      <section className="services section-padding">
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
        <OwlCarousel className="owl-theme" {...options}>
          {items.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="card"
                style={{
                  margin: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  padding: "0",
                }}
              >
                <Link to={item.link}>
                  <img src={item.imageSrc} className="" alt={item.title} />
                  <div className="card-overlay">
                    <h5 className="card-category">{item.category}</h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </section>
    </div>
  );
};

export default Looks;
