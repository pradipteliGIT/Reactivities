import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../../stores/store";
import ActivityList from "../ActivityList/ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../Form/ActivityForm";

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <div style={{ paddingTop: "10px" }}>
      <Grid container>
        <Grid item xs={8}>
          <ActivityList />
        </Grid>
        <Grid item xs={4}>
          {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />}
        </Grid>
      </Grid>
    </div>
  );
};

export default observer(ActivityDashboard);
