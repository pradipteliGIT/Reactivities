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
import Activity from "../../../app/models/activity";

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

interface Props {
  activity: Activity;
  handleCancelActivity: () => void;
  handleEditMode: (id?: string) => void;
}

const ActivityDetails = ({
  activity,
  handleCancelActivity,
  handleEditMode,
}: Props) => {
  const classes = useStyles;
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
              handleEditMode(activity.id);
            }}
            fullWidth
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
          &nbsp;
          <Button
            onClick={handleCancelActivity}
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
