import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  const handleGoToTours = () => {
    history.push("/tours");
  };
  return (
    <Carousel fade>
      <Carousel.Item className="carousel-item carousel-item--1">
        <div className="carousel-content">
          <h1>Book for unique experience</h1>
          <p>We promise, it won’t get boring.</p>
          <button onClick={handleGoToTours} className="btn-book">
            Book Now
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item carousel-item--2">
        <div className="carousel-content">
          <h1>Enjoy Unforgettable holidays</h1>
          <p>Best places for your next travel are here check them out</p>
          <button onClick={handleGoToTours} className="btn-book">
            Book Now
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item carousel-item--3">
        <div className="carousel-content">
          <h1>Top attraction to discover</h1>
          <p>Feel free to discover most engaging places.</p>
          <button onClick={handleGoToTours} className="btn-book">
            Book Now
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
