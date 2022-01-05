import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useStore } from "../../../stores/store";
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
  const { activityStore } = useStore();
  return (
    <div>
      <AppBar position="static" sx={classes.appBar}>
        <Toolbar>
          <img src="./asset/logo.png" alt="logo" className="appbar-logo" />
          <Typography variant="h6" sx={classes.title}>
            Reactivities
          </Typography>
          <Typography variant="h6" sx={classes.titleActivities}>
            Activities
          </Typography>
          <Button
            onClick={() => activityStore.openForm()}
            variant="contained"
            sx={classes.button}
          >
            Create Activity
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
