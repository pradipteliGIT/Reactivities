import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const useStyles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: `flex`,
    alignItems: `center`,
    height: 60,
    backgroundImage: `linear-gradient(
        135deg,
        rgb(24, 42, 115) 0%,
        rgb(32, 138, 134) 69%,
        rgb(32, 167, 172) 89%
      ) !important;`,
  },
  title: {
    fontSize: 16,
    marginLeft: 2,
  },
  titleActivities: {
    fontSize: 16,
    marginLeft: 3,
  },
  button: {
    marginLeft: 5,
  },
};

const Navbar = () => {
  const classes = useStyles;

  return (
    <div>
      <AppBar position="static" sx={classes.appBar}>
        <Toolbar>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            <img src="./asset/logo.png" alt="logo" className="appbar-logo" />
          </NavLink>
          <Typography variant="h6" sx={classes.title}>
            Reactivities
          </Typography>
          <NavLink
            to="/Dashboard"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            <Typography variant="h6" sx={classes.titleActivities}>
              Activities
            </Typography>
          </NavLink>
          <NavLink to="/CreateActivity">
            <Button variant="contained" sx={classes.button}>
              Create Activity
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
