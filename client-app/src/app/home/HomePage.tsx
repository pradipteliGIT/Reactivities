import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ padding: "0", margin: "0" }}>
        Welcome to Reactivities{" "}
        <NavLink to="/activities">Go to Dashboard</NavLink>
      </h2>
    </div>
  );
};

export default HomePage;
