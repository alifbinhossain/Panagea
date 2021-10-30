import axios from "axios";
import React from "react";
import "./Booking.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Rating from "react-rating";
import { useForm } from "react-hook-form";
import useAll from "../../hooks/useAll";

const Booking = () => {
  const [tour, setTour] = useState({});
  const { user } = useAll();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tour/${id}`)
      .then((data) => setTour(data.data));
  }, []);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const orderInfo = {
      name: data.name,
      email: data.email,
      address: data.address,
      date: data.date,
      tour: tour,
    };

    axios.post("http://localhost:5000/tour/booking", orderInfo).then((data) => {
      const isPlaced = data.data.insertedId;
      if (isPlaced) {
        alert(`You’re booked! Pack your bags – see you soon..`);
        reset();
      }
    });

    console.log(orderInfo);
  };

  return (
    <section className="booking">
      {tour.name && (
        <div className="booking-content mt-5">
          <div className="booking-tour">
            <div className="booking-tour">
              <div className="booking-tour--image">
                <img src={tour.img} alt="" />
              </div>
              <div className="booking-tour--content">
                <h2 className="mb-3">{tour.name}</h2>
                <h4 className="mb-4">
                  <span>${tour.price} </span>/ per person
                </h4>
                <p>
                  <i class="fas fa-clock icon-pink me-2"></i>
                  <span>
                    {tour.duration} Days {tour.duration - 1} Nights
                  </span>
                </p>
                <p>
                  <Rating
                    readonly
                    className="star me-3"
                    initialRating={tour.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                  />
                  <span>
                    ( {tour.reviews} Reviews{" "}
                    <i class="mx-1 fas fa-user icon-pink"></i> )
                  </span>
                </p>

                <p className="tour-description">{tour.description}</p>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------- */
          /*                                BOOKING FORM                                */
          /* -------------------------------------------------------------------------- */}
          <div className="booking-form">
            <h3>Book this tour</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="name"
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <small>Name is required</small>
              )}

              <input
                placeholder="email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
              />
              {errors.email && <small>Email is required</small>}
              <input
                placeholder="address"
                {...register("address", { required: true })}
              />
              {errors.address && <small>Address is required</small>}
              <input
                type="date"
                placeholder="date"
                {...register("date", { required: true })}
              />
              {errors.date && <small>Date is required</small>}

              <input className="btn-book mt-3" type="submit" />
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
