import axios from "axios";
import "./AllOrders.css";
import React, { useEffect, useState } from "react";
import AllOrderItem from "../AllOrderItem/AllOrderItem";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all_orders")
      .then((data) => setAllOrders(data.data));
  }, []);

  const handleOrderDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure? You want to remove this order!"
    );

    if (proceed) {
      axios.delete(`http://localhost:5000/my_order_list/${id}`).then((data) => {
        console.log(data);
        const isDeleted = data.data.deletedCount;

        if (isDeleted) {
          alert("Successfully removed this order");
          const remaining = allOrders.filter((order) => order._id !== id);
          setAllOrders(remaining);
        }
      });
    }
  };

  return (
    <ul className="all-orders">
      <h1>All Orders</h1>
      {allOrders.map((order, index) => (
        <AllOrderItem
          key={order._id}
          order={order}
          index={index}
          handleOrderDelete={handleOrderDelete}
        ></AllOrderItem>
      ))}
    </ul>
  );
};

export default AllOrders;
