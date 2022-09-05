import React from "react";
import { NavLink } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit>
          <div className="form-group  bg-light p-5">
            <p className="row justify-content-center align-items-center text-primary bg-dark fs-1">
              Sign Up
            </p>
            <div className="row">
              <div className="col-6">
                <label htmlFor="first name">First Name</label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="fname"
                  placeholder="First Name"
                  value
                  onChange
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="last name">Last Name</label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="lname"
                  placeholder="Last Name"
                  value
                  onChange
                  required
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control border border-primary"
                  id="email"
                  placeholder="Email"
                  value
                  onChange
                  required
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control border border-primary"
                  id="password"
                  placeholder="Password"
                  value
                  onChange
                  required
                />
              </div>
            </div>
            <div className="form-check d-flex justify-content-center text-muted mt-4 mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form"
              />
              <label className="form-check-label" htmlFor="form" required>
                By Signing Up you agree to our Terms and Conditions
              </label>
            </div>
            <NavLink to="/dashboard">
              <button type="submit" className="btn btn-primary mt-6 col-12 ">
                Get Started
              </button>
            </NavLink>
            <p className="text-center text-muted mt-5 mb-0">
              Have already an account?{" "}
              <NavLink to="/" className="fw-bold text-body">
                <u className="text-danger">Login here</u>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
