import axios from "axios";
import React from "react";
import "./Tours.css";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Tour from "../../Components/Tour/Tour";
import { PuffLoader } from "react-spinners";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      axios.get("http://localhost:5000/tours").then((data) => {
        setTours(data.data);
        setLoding(false);
      });
    }, 1500);
  }, []);
  return (
    <section className="tours">
      <h1 className="text-center">All Tours</h1>

      {loading ? (
        <div className="spinner-box">
          <PuffLoader color="#fc5b62" />
        </div>
      ) : (
        <div className="container">
          <Row xs={1} md={2} lg={3} className="g-4">
            {tours.map((tour) => (
              <Col key={tour._id}>
                <Tour tour={tour}></Tour>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </section>
  );
};

export default Tours;
