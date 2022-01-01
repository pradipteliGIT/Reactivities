import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  createStyles,
  Grid,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import Activity from "../../../app/models/activity";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 16,
      marginLeft: 5,
      color: "black",
      fontWeight: "bold",
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
  })
);

interface Props {
  activities: Activity[];
  handleSelectedActivity: (id: string) => void;
  handleDelete: (id: string) => void;
}

const ActivityList = ({
  activities,
  handleSelectedActivity,
  handleDelete,
}: Props) => {
  const classes = useStyles();
  return (
    <>
      {activities.map((activity) => (
        <Grid key={activity.id} item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card className={classes.card} variant="outlined">
              <CardHeader
                className={classes.cardHeader}
                title={
                  <>
                    <Link
                      className={classes.title}
                      component="button"
                      variant="body2"
                    >
                      {activity.title}
                    </Link>
                    <Typography variant="body2" color="textSecondary">
                      {activity.date}
                    </Typography>
                  </>
                }
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
              <CardActions className={classes.cardFooter}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => {
                    handleDelete(activity.id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => {
                    handleSelectedActivity(activity.id);
                  }}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default ActivityList;
