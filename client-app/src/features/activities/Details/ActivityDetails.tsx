import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useStore } from "../../../stores/store";

const useStyles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    width: "90%",
  },
  cardActions: {
    display: "flex",
  },
};

const ActivityDetails = () => {
  const classes = useStyles;
  const { activityStore } = useStore();
  const { selectedActivity: activity } = activityStore;

  if (!activity) {
    return null;
  }

  return (
    <>
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
          <Button
            onClick={() => {
              activityStore.openForm(activity.id);
            }}
            fullWidth
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
          &nbsp;
          <Button
            onClick={activityStore.cancelSelectedActivity}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ActivityDetails;
