import React from "react";

const PaymentTable = () => {
  return (
    <div>
      <table className="table table-bordered text-center ">
        <thead className="bg-primary">
          <tr>
            <th style={{ width: "12%" }}>Date</th>
            <th style={{ width: "12%" }}> Name </th>
            <th style={{ width: "12%" }}> Amount Paid </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12-02-2020</td>
            <td>Sneha</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>12-12-2020</td>
            <td>Lucky</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>20-02-2000</td>
            <td>Ashi</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>12-02-2020</td>
            <td>Nikhil</td>
            <td>4000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
