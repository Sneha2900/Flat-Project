import React from "react";

const FlatDetailsTable = ({ flatdetails }) => {
  return (
    <div>
      <table className="table  table-bordered text-center ">
        <thead className="bg-primary">
          <tr>
            <th style={{ width: "12%" }}>FlatName</th>
            <th style={{ width: "12%" }}> Address </th>
            <th style={{ width: "12%" }}> Contact </th>
            <th style={{ width: "12%" }}> Total Rent </th>
            <th style={{ width: "12%" }}> Due </th>
            <th style={{ width: "12%" }}> Electricity Consumed </th>
            <th style={{ width: "12%" }}> Security </th>
            <th style={{ width: "12%" }}> Shifted On </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {flatdetails?.flatName ?? ""} </td>
            <td>{flatdetails?.address ?? ""}</td>
            <td>{flatdetails?.tenantPhone ?? ""}</td>
            <td>{flatdetails?.rent ?? ""}</td>
            <td>{flatdetails?.dues ?? "3000"}</td>
            <td>{flatdetails?.electricityConsumed ?? "134"}</td>
            <td>{flatdetails?.security ?? ""}</td>
            <td>{flatdetails?.startDate ?? ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlatDetailsTable;
