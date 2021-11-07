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
    <section className="admin" data-aos="fade-in">
      {/* -------------------------------------------------------------------------- */
      /*                        CHECK IF ADMIN LOG IN OR NOT                        */
      /* -------------------------------------------------------------------------- */}
      {email === "admin@gmail.com" ? (
        <AdminPanel></AdminPanel>
      ) : (
        <div className="admin-login d-lg-flex align-items-center">
          <img src={img} alt="" />
          <div>
            <h2 className="mb-3">
              Get access to the admin panel,please login with
            </h2>

            <p>
              <i class="fas fa-envelope-open me-2"></i> admin@gmail.com
            </p>
            <p>
              <i className="fas fa-key me-2"></i> Admin@123
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Admin;
