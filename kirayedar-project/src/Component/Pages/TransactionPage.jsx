import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FlatDetailsTable from "../Tables/FlatDetailsTable";
import PaymentTable from "../Tables/PaymentTable";
import RentTable from "../Tables/RentTable";
import { useParams } from "react-router-dom";
import { getFlats, getPayments, getRents } from "../../Services/FlatServices";
import { useEffect } from "react";

const TransactionPage = (props) => {
  const params = useParams();
  console.log(params.flatId);
  const [flats, setFlats] = useState(getFlats());
  const [payments, setPayment] = useState(getPayments());
  const [rents, setRents] = useState(getRents());

  useEffect(() => {
    setPayment((payments) =>
      payments.filter((payment) => payment.flatId === parseInt(params.flatId))
    );
    setFlats((flats) =>
      flats.filter((flat) => flat.flatId === parseInt(params.flatId))
    );
    setRents((rents) =>
      rents.filter((rent) => rent.flatId === parseInt(params.flatId))
    );
  }, []);
  // console.log(flats.filter((flat) => (flat.flatId = parseInt(params.flatId))));
  console.log({ flats, payments, rents });

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

          <button className="navbar-right btn btn-primary text-light bg-dark">
            Sign Out
          </button>
        </div>
      </nav>
      <div className="d-flex justify-content-end m-2 text-light">
        <p className="bg-secondary p-1">Edit Entries</p>
      </div>

      <div className="m-1 p-1">
        <FlatDetailsTable flatdetails={flats[0]} />
      </div>
      <div className="m-1">
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav ">
              <li className="nav-item fs-4">
                <a className="nav-link text-dark " href="#">
                  Payment History
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-end mt-1">
              <button type="submit" className="btn btn-outline-primary">
                View All
              </button>
              <Link to="/addpayment">
                <button type="submit" className="btn btn-primary ms-3">
                  Add New Payment
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="m-1 p-1">
        <PaymentTable />
      </div>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav ">
            <li className="nav-item fs-4">
              <a className="nav-link text-dark " href="#">
                Rent History
              </a>
            </li>
          </ul>
          <div className="d-flex justify-content-end mt-1">
            <button type="submit" className="btn btn-outline-primary">
              View All
            </button>
            <Link to="/addrent">
              <button type="submit" className="btn btn-primary ms-3">
                Add New Rent
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <RentTable />
    </div>
  );
};

export default TransactionPage;
