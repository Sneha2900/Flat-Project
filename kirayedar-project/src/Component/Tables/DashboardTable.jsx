import React from "react";
import { NavLink } from "react-router-dom";

const DashboardTable = ({ flat }) => {
  return (
    <div>
      <table className="table table-bordered text-center ">
        <thead className="bg-primary">
          <tr>
            <th style={{ width: "18%" }}>FlatName</th>
            <th style={{ width: "18%" }}> Dues </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <NavLink to="/transaction" style={{ decoration: "none" }}>
                Noida 131
              </NavLink>{" "}
            </td>
            <td>2000</td>
          </tr>
          <tr>
            <td>
              <NavLink to="/transaction" style={{ decoration: "none" }}>
                {" "}
                Noida 132
              </NavLink>
            </td>
            <td>3000</td>
          </tr>
          <tr>
            <td>
              <NavLink to="/transaction" style={{ decoration: "none" }}>
                Noida 133
              </NavLink>
            </td>
            <td>2500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
