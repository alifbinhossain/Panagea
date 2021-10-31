import React from "react";
import "./Admin.css";
import useAll from "../../hooks/useAll";
import img from "../../assets/images/others/admin-login.svg";
import AdminPanel from "../AdminPanel/AdminPanel";

const Admin = () => {
  const { user } = useAll();
  const email = user.email;

  //admin@gmail.com
  //Admin@123

  return (
    <section className="admin">
      {email === "admin@gmail.com" ? (
        <AdminPanel></AdminPanel>
      ) : (
        <div className="admin-login d-flex align-items-center">
          <img src={img} alt="" />
          <h2>
            <span className="big d-block ">
              {" "}
              <i className="fas fa-key"></i> Get access to the admin
              panel,please login with{" "}
            </span>{" "}
            <br /> email :<span> admin@gmail.com</span> <br />
            password :<span> Admin@123</span>
          </h2>
        </div>
      )}
    </section>
  );
};

export default Admin;
