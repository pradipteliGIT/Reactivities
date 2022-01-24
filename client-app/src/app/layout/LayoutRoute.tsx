import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const LayoutRoute = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Container sx={{ padding: "10px" }}>
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default LayoutRoute;
