import React from "react";
import "./Tour.css";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router";

const Tour = ({ tour }) => {
  const {
    img,
    name,
    description,
    category,
    price,
    duration,
    rating,
    reviews,
    _id,
  } = tour;

  const history = useHistory();
  const url = `/tour/booking/${_id}`;

  const handleGoToBooking = () => {
    history.push(url);
  };
  return (
    <Card className="tour">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="title d-flex justify-content-between align-items-center">
          {name}
          {category === "popular" && (
            <span className="popular-box">
              {category} <i className="fas fa-fire"></i>
            </span>
          )}
          {category === "adventure" && (
            <span className="adventure-box">
              {category} <i class="fas fa-biohazard"></i>
            </span>
          )}
          {category === "explore" && (
            <span className="explore-box">
              {category} <i class="fas fa-dove"></i>
            </span>
          )}
        </Card.Title>
        <Card.Text className="description mt-3">
          {description.slice(0, 150)}..
          <h6 className="tour-price">
            Starting from :{" "}
            <span>
              ${price} / {duration} day
            </span>
          </h6>
          <div className="review-box mt-2 ">
            <button onClick={handleGoToBooking} className="btn-book">
              Book Now
            </button>
            <div className="total-reviews">
              <Rating
                readonly
                className="star"
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              />

              <span className="total">
                <i className="fas fa-users"></i> {reviews}
              </span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tour;
