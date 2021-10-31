import axios from "axios";
import React, { useEffect, useState } from "react";
import MyOrderList from "../../Components/MyOrderList/MyOrderList";
import useAll from "../../hooks/useAll";
import "./MyOrders.css";
import img from "../../assets/images/others/no-order.svg";

const MyOrders = () => {
  const { user } = useAll();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/my_order/${user?.email}`).then((data) => {
      setMyOrders(data.data);
    });
  }, []);

  const name = myOrders[0]?.name;
  const email = myOrders[0]?.email;
  const address = myOrders[0]?.address;

  const handleOrderDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure? You want to cancel this order!"
    );

    if (proceed) {
      axios.delete(`http://localhost:5000/my_order_list/${id}`).then((data) => {
        console.log(data);
        const isDeleted = data.data.deletedCount;

        if (isDeleted) {
          alert("Successfully canceled this tour");
          const remaining = myOrders.filter((order) => order._id !== id);
          setMyOrders(remaining);
        }
      });
    }
  };

  return (
    <section className="my-orders">
      {myOrders.length ? (
        <>
          <div className="user-orders">
            <h1 className="text-center mb-4"> My Orders</h1>
            <div className="user-info d-lg-flex align-items-center ">
              <h4>Name : {name}</h4>
              <h4>Email : {email}</h4>
              <h4>Address : {address}</h4>
              <h4> Total Orders : {myOrders.length}</h4>
            </div>
            <ul>
              {myOrders.map((order) => (
                <MyOrderList
                  key={order._id}
                  order={order}
                  handleOrderDelete={handleOrderDelete}
                ></MyOrderList>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="no-order">
          <h1> No Orders added yet!</h1>
          <img src={img} alt="" />
        </div>
      )}
    </section>
  );
};

export default MyOrders;
