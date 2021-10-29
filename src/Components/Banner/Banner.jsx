import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel-item carousel-item--1">
        <div className="carousel-content">
          <h1>Book for unique experience</h1>
          <p>Tours | Hotels | Restaurants</p>
          <button className="btn-book">Book Now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item carousel-item--2">
        <div className="carousel-content">
          <h1>Enjoy Unforgettable holidays</h1>
          <p>Tours | Hotels | Restaurants</p>
          <button className="btn-book">Book Now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item carousel-item--3">
        <div className="carousel-content">
          <h1>Top attraction to discover</h1>
          <p>Tours | Hotels | Restaurants</p>
          <button className="btn-book">Book Now</button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
