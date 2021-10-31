import React from "react";
import "./AdminPanel.css";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

const AdminPanel = () => {
  const activeStyle = {
    backgroundColor: "#e3e3e3e3",
    color: "#121921",
  };

  return (
    <section className="admin-panel">
      <aside>
        <h2 className="mb-4">
          <i className="fas fa-user-lock me-3"></i>
        </h2>

        <NavLink
          activeStyle={activeStyle}
          className="link"
          to="/admin/admin_panel/manage_all_services"
        >
          <i className="fas fa-cogs me-2"></i> Manage All Services
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="link"
          to="/admin/admin_panel/add_new_services"
        >
          <i className="fas fa-folder-plus me-2"></i> Add New Services
        </NavLink>
      </aside>

      <main className="content">
        <Route exact path="/admin">
          <h1>This is all service</h1>
        </Route>
        <Route exact path="/admin/admin_panel/manage_all_services">
          <h1>This is all service</h1>
        </Route>
        <Route exact path="/admin/admin_panel/add_new_services">
          <h1>Add New Services</h1>
        </Route>
      </main>
    </section>
  );
};

export default AdminPanel;
