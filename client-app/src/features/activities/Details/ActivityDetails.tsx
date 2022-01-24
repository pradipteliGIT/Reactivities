import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";

const useStyles = {
  media: {
    height: "50px",
    paddingTop: "56.25%", // 16:9
  },
  card: {
    width: "50%",
    margin: "auto",
  },
  cardActions: {
    display: "flex",
  },
};

const ActivityDetails = () => {
  const classes = useStyles;
  const { activityStore } = useStore();
  const { selectedActivity: activity, loadActivity } = activityStore;
  const { id } = useParams<{ id: string }>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, [id, loadActivity]);

  if (!activity) return <Loading />;
  return (
    <Card sx={classes.card}>
      <CardHeader title={activity.title} subheader={activity.date} />
      <CardMedia
        sx={classes.media}
        image={`/asset/categoryImages/${activity.category}.jpg`}
        title="Image"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {activity.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {activity.city},{activity.venue}
        </Typography>
      </CardContent>
      <CardActions sx={classes.cardActions} disableSpacing>
        <NavLink to={`/manage/${activity.id}`}>
          <Button fullWidth variant="contained" color="primary">
            Edit
          </Button>
        </NavLink>
        &nbsp;
        <NavLink to="/activities">
          <Button fullWidth variant="contained" color="secondary">
            Cancel
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default observer(ActivityDetails);
