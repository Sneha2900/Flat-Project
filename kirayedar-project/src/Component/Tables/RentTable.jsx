import React from "react";

const RentTable = () => {
  return (
    <div>
      <div className="m-1 p-1">
        <table className="table table-bordered text-center ">
          <thead className="bg-primary text-warning">
            <tr>
              <th rowSpan="2" style={{ width: "20%", paddingBottom: "25px" }}>
                Date
              </th>
              <th rowSpan="2" style={{ width: "20%", paddingBottom: "25px" }}>
                {" "}
                Flat No{" "}
              </th>
              <th rowSpan="2" style={{ width: "20%", paddingBottom: "25px" }}>
                {" "}
                Rent Amount{" "}
              </th>
              <th scope="col" style={{ width: "25%" }} colSpan="2">
                Electricity
              </th>

              <th rowSpan="2" style={{ width: "25%", paddingBottom: "25px" }}>
                Total
              </th>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th style={{ width: "10%" }}>units</th>
              <th style={{ width: "10%" }}>price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RentTable;
