import {
  Button,
  Card,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import Activity from "../../../app/models/activity";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: "5px",
      width: "90%",
      padding: "10px",
    },
    cardActions: {
      display: "flex",
    },
    textField: {
      marginBottom: "15px",
    },
  })
);
interface Props {
  activity: Activity | undefined;
  handleCancelEditMode: () => void;
  createOrEdit: (activity: Activity) => void;
}
const ActivityForm = ({
  activity: SelectedActivity,
  handleCancelEditMode,
  createOrEdit,
}: Props) => {
  const classes = useStyles();
  const initialState = SelectedActivity ?? {
    id: "",
    title: "",
    description: "",
    date: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createOrEdit(activity);
  };

  return (
    <Grid container>
      <Card className={classes.card}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={activity.title}
            onChange={handleChange}
            className={classes.textField}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={activity.description}
            onChange={handleChange}
            className={classes.textField}
          />
          <TextField
            id="category"
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            value={activity.category}
            onChange={handleChange}
            className={classes.textField}
          />
          <TextField
            id="date"
            name="date"
            label="Date"
            variant="outlined"
            fullWidth
            value={activity.date}
            onChange={handleChange}
            className={classes.textField}
          />
          <TextField
            id="city"
            name="city"
            label="City"
            variant="outlined"
            fullWidth
            value={activity.city}
            onChange={handleChange}
            className={classes.textField}
          />
          <TextField
            id="venue"
            name="venue"
            label="Venue"
            variant="outlined"
            fullWidth
            value={activity.venue}
            onChange={handleChange}
            className={classes.textField}
          />
          <Button variant="contained" type="submit" color="primary">
            Save
          </Button>
          &nbsp;
          <Button
            onClick={handleCancelEditMode}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </form>
      </Card>
    </Grid>
  );
};

export default ActivityForm;
