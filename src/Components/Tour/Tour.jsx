import React from "react";
import "./Tour.css";
import { Card } from "react-bootstrap";
import { AiTwotoneFire } from "react-icons/ai";
import Rating from "react-rating";

const Tour = ({ tour }) => {
  const { img, name, description, category, price, duration, rating, reviews } =
    tour;

  console.log(price, duration);
  return (
    <Card className="tour">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="title d-flex justify-content-between align-items-center">
          {name}
          <span className="popular-box">
            {category} <i class="fas fa-fire"></i>
          </span>
        </Card.Title>
        <Card.Text className="description">
          {description.slice(0, 150)}..
          <div className="review-box mt-2 ">
            <button className="btn-book">Book Now</button>
            <div className="total-reviews">
              <Rating
                readonly
                className="star"
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              />
              <span className="total">
                <i class="fas fa-users"></i> {reviews}
              </span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tour;
