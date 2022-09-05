import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [userInfo, setInfo] = useState({
    email: null,
    password: null,
  });
  const HandleInputChange = (event) => {
    setInfo({ [event.target.id]: event.target.value });
  };
  console.log(userInfo);
  return (
    <>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-8 col-lg-6">
              <div className="border border-3 border-primary"></div>

              <div className="card bg-white">
                <div className="card-body p-5">
                  <h2 className="fw-bold  text-uppercase mb-4 d-flex justify-content-center">
                    Login{" "}
                  </h2>
                  <form onSubmit={HandleInputChange}>
                    <div className="mb-3">
                      <label for="email" className="form-label ">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={userInfo.email}
                        onChange={HandleInputChange}
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label ">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="*******"
                        value={userInfo.password}
                        onChange={HandleInputChange}
                      />
                    </div>
                    <p className="text-end">
                      <a className="text-primary" href="forget-password.html">
                        Forgot password?
                      </a>
                    </p>
                    <NavLink to="dashboard">
                      <div className="d-grid">
                        <button className="btn btn-primary" type="submit">
                          Login
                        </button>
                      </div>
                    </NavLink>
                  </form>
                  <div>
                    <p className="mb-0  text-center">Don't have an account?</p>{" "}
                    <NavLink to="signup" className="d-grid btn btn-primary">
                      Sign In
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
