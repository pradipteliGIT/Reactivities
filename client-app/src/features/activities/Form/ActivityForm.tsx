import { DatePicker, LoadingButton } from "@mui/lab";
import { Button, Card, Grid, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { isValid } from "date-fns";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";
import { v4 as uuid } from "uuid";

const useStyles = {
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
};

const initialActivity = {
  id: "",
  title: "",
  description: "",
  date: "",
  category: "",
  city: "",
  venue: "",
};

const ActivityForm = () => {
  const classes = useStyles;
  const navigate = useNavigate();
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loadActivity,
    loading,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  const [activity, setActivity] = useState({
    ...initialActivity,
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
    else {
      setActivity({
        ...initialActivity,
      });
    }
  }, [id, loadActivity]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleDateChange = (currentDate: Date | null) => {
    let newDate = "";
    if (currentDate && isValid(currentDate)) {
      newDate = currentDate?.toISOString();
    }
    setActivity({ ...activity, date: newDate });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (activity.id.length === 0) {
      const payload = {
        ...activity,
        id: uuid(),
      };
      createActivity(payload).then(() => {
        navigate(`/activities/${payload.id}`);
      });
    } else {
      updateActivity(activity).then(() => {
        navigate(`/activities/${activity.id}`);
      });
    }
  };

  if (loadingInitial) return <Loading />;

  return (
    <Grid container>
      <Card sx={classes.card}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={activity.title}
            onChange={handleChange}
            sx={classes.textField}
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
            sx={classes.textField}
          />
          <TextField
            id="category"
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            value={activity.category}
            onChange={handleChange}
            sx={classes.textField}
          />
          <DatePicker
            key={id}
            label="Basic example"
            inputFormat="dd/MM/yyyy"
            value={activity.date}
            onChange={(newValue: Date | null) => {
              handleDateChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                fullWidth
                name="date"
                {...params}
                sx={classes.textField}
                error={false}
              />
            )}
          />
          <TextField
            id="city"
            name="city"
            label="City"
            variant="outlined"
            fullWidth
            value={activity.city}
            onChange={handleChange}
            sx={classes.textField}
          />
          <TextField
            id="venue"
            name="venue"
            label="Venue"
            variant="outlined"
            fullWidth
            value={activity.venue}
            onChange={handleChange}
            sx={classes.textField}
          />
          <LoadingButton
            loading={loading}
            variant="contained"
            type="submit"
            color="primary"
          >
            Save
          </LoadingButton>
          &nbsp;
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </form>
      </Card>
    </Grid>
  );
};

export default observer(ActivityForm);
