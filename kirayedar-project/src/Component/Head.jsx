import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <nav
        className="navbar bg-primary"
        style={{ width: "100%", height: "70px" }}
      >
        <div className="container-fluid">
          <img
            src="home.png"
            alt="hurrr"
            style={{
              width: "50px",
              position: "absolute",
            }}
          />
          <span
            className="text-light fw-bold"
            style={{ fontSize: "30px", left: "100px", position: "absolute" }}
          >
            KIRAYEDAR
          </span>
        </div>
      </nav>
    </>
  );
};

export default Head;
