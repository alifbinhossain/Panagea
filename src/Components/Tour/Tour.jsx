import React from "react";
import "./Tour.css";
import { Card } from "react-bootstrap";
import { AiTwotoneFire } from "react-icons/ai";

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
            {category} <AiTwotoneFire className="icon" />
          </span>
        </Card.Title>
        <Card.Text className="description">
          {description.slice(0, 150)}..
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tour;
