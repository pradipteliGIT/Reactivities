import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import Loading from "../../../shared/Loading/Loading";
import { useStore } from "../../../stores/store";
import ActivityList from "../ActivityList/ActivityList";
import ActivityFilters from "./ActivityFilters";

const ActivityDashboard = () => {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <Loading label="Loading..." />;
  }

  return (
    <Grid container>
      <Grid item xs={8}>
        <ActivityList />
      </Grid>
      <Grid item xs={4}>
        <ActivityFilters />
      </Grid>
    </Grid>
  );
};

export default observer(ActivityDashboard);
