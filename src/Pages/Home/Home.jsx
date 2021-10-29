import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import world from "../../assets/images/others/world.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Tour from "../../Components/Tour/Tour";
import Statistics from "../../Components/Statistics/Statistics";
import TopReviews from "../../Components/TopReviews/TopReviews";

const Home = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/home/tours")
      .then((data) => setTours(data.data));
  }, []);

  return (
    <div className="home">
      <Banner></Banner>

      <section className="popular-tours">
        <h1 className="text-center">Our Popular Tours</h1>
        <div className="container">
          <Row xs={1} md={2} lg={3} className=" g-5">
            {tours.map((tour) => (
              <Col key={tour._id}>
                <Tour tour={tour}></Tour>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <TopReviews></TopReviews>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
