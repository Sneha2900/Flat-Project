import React from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardTable from "../Tables/DashboardTable";

const DashboardPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary">
        <div className="container-fluid">
          <ul className="navbar-nav ">
            <li className="nav-item fs-4">
              <NavLink to="/dashboard" className="nav-link text-white ">
                DashBoard
              </NavLink>
            </li>
          </ul>
          <NavLink to="/signup">
            <button className="navbar-right btn btn-primary text-light bg-dark">
              Sign Out
            </button>
          </NavLink>
        </div>
      </nav>

      <div className="card m-5" style={{ width: "180px" }}>
        <div className="card-body ">
          <h6 className="card-subtitle mb-2 text-muted">Rent Per Month</h6>
          <h3 className="card-title">Rs. 5000</h3>
          <h6 className="card-subtitle mb-2 text-muted mt-4">Total Dues</h6>
          <h3 className="card-title">Rs. 5000</h3>
        </div>
      </div>
      <div className="m-5 p-5">
        <DashboardTable />
        <Link to="/addflat">
          <button type="submit" className="btn btn-primary text-light">
            Add more..
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
