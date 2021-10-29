import React from "react";
import "./TopReviews.css";
import banner from "../../assets/images/others/review-banner.jpg";
import { Carousel } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import user1 from "../../assets/images/others/user-1.jpg";
import user2 from "../../assets/images/others/user-2.jpg";
import user3 from "../../assets/images/others/user-3.jpg";

const TopReviews = () => {
  return (
    <section className="top-reviews">
      <div className="review-banner">
        <img src={banner} alt="" />
      </div>
      <div className="review-carousel-container">
        <h2 className="text-center">Our Top Reviews</h2>
        <Carousel
          fade
          indicators={false}
          controls={false}
          className="review-carousel"
        >
          <Carousel.Item className="review-carousel-item">
            <div className="content">
              <h4>Highlight Rome</h4>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <p className="mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci delectus repudiandae deserunt suscipit amet quibusdam
                iusto fugiat! Maiores, expedita voluptatibus? Vitae est unde
                perferendis aut illo. Eaque ipsa expedita velit.
              </p>

              <div className="happy-customer-name my-3">Hert Coney</div>
              <img src={user1} alt="" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="review-carousel-item">
            <div className="content">
              <h4>Discover Brasil</h4>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <p className="mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci delectus repudiandae deserunt suscipit amet quibusdam
                iusto fugiat! Maiores, expedita voluptatibus? Vitae est unde
                perferendis aut illo. Eaque ipsa expedita velit.
              </p>

              <div className="happy-customer-name my-3">Karin thomas</div>
              <img src={user2} alt="" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="review-carousel-item">
            <div className="content">
              <h4>Explore Bangladesh</h4>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <p className="mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci delectus repudiandae deserunt suscipit amet quibusdam
                iusto fugiat! Maiores, expedita voluptatibus? Vitae est unde
                perferendis aut illo. Eaque ipsa expedita velit.
              </p>

              <div className="happy-customer-name my-3">Roman Paolera</div>
              <img src={user3} alt="" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default TopReviews;
