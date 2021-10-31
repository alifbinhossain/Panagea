import axios from "axios";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import "./AllOrderItem.css";

const AllOrderItem = ({ order, index, handleOrderDelete }) => {
  const { email, date, tour, status, _id } = order;
  const { name } = tour;

  console.log(index);
  const [checked, setChecked] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    if (status === "confirm") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);
  const handleUpdateStatus = () => {
    setChecked(!checked);
    if (!checked) {
      order.status = "confirm";
    } else {
      order.status = "pending";
    }

    axios
      .put(
        `https://shrieking-corpse-81438.herokuapp.com/all_orders/${_id}`,
        order
      )
      .then((data) => {
        const isUpdated = data.data.modifiedCount;
        if (isUpdated) {
          alert("Order status updated successfully..");
          setCurrentStatus(order.status);
        }
      });
  };

  return (
    <li className="all-order-item">
      <h5>
        {" "}
        {index + 1} . {name}
      </h5>
      <p>{email}</p>
      <p>date : {date}</p>

      <p className="d-flex align-items-center justify-content-center">
        {currentStatus}
        <Switch
          onChange={handleUpdateStatus}
          checked={checked}
          className=" ms-3 react-switch"
          onHandleColor="#92EC7F"
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={16}
          width={38}
          id="material-switch"
        />
      </p>

      <button className="btn-delete" onClick={() => handleOrderDelete(_id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default AllOrderItem;
