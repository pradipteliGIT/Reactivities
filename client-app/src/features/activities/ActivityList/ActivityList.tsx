import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { SyntheticEvent, useState } from "react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const useStyles = {
  title: {
    fontSize: 20,
    marginLeft: 0,
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  },
  card: {
    minWidth: "90%",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardHeader: {
    paddingBottom: 0,
  },
  gridContainer: {
    margin: "20px",
  },
};

const ActivityList = () => {
  const classes = useStyles;
  const { activityStore } = useStore();
  const { deleteActivity, loading, activityByDate } = activityStore;
  const [target, setTarget] = useState<string | null>(null);
  const handleActivityDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    const targetName = e.currentTarget.name;
    setTarget(targetName);
    deleteActivity(id);
  };
  return (
    <>
      {activityByDate.map((activity) => (
        <Grid key={activity.id} item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card sx={classes.card} variant="outlined">
              <CardHeader
                sx={classes.cardHeader}
                title={
                  <>
                    <Link sx={classes.title} component="button" variant="body2">
                      {activity.title}
                    </Link>
                  </>
                }
                subheader={activity.date}
              ></CardHeader>
              <CardContent>
                <Typography variant="body2" component="p">
                  {activity.description}
                </Typography>
                <Typography variant="body2" component="p">
                  {activity.city},{activity.venue}
                </Typography>
                <br />
                <Button variant="outlined" disabled>
                  {activity.category}
                </Button>
              </CardContent>
              <CardActions sx={classes.cardFooter}>
                <LoadingButton
                  name={activity.id}
                  loading={loading && activity.id === target}
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={(e: SyntheticEvent<HTMLButtonElement>) => {
                    handleActivityDelete(e, activity.id);
                  }}
                >
                  Delete
                </LoadingButton>
                <NavLink to={`/activities/${activity.id}`}>
                  <Button variant="contained" color="primary" size="small">
                    View
                  </Button>
                </NavLink>
              </CardActions>
            </Card>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default observer(ActivityList);
