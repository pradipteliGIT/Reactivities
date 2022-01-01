import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      marginLeft: 5,
    },
    titleActivities: {
      fontSize: 16,
      marginLeft: 20,
    },
    button: {
      marginLeft: 20,
    },
  })
);

interface Props {
  handleEditMode: (id?: string) => void;
}

const Navbar = ({ handleEditMode }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src="./asset/logo.png" alt="logo" className="appbar-logo" />
          <Typography variant="h6" className={classes.title}>
            Reactivities
          </Typography>
          <Typography variant="h6" className={classes.titleActivities}>
            Activities
          </Typography>
          <Button
            onClick={() => handleEditMode()}
            variant="contained"
            className={classes.button}
          >
            Create Activity
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
