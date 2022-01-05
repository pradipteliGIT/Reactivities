import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Loading from "../../shared/Loading/Loading";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <Loading label="Loading..." />;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Navbar />
      <ActivityDashboard />
    </LocalizationProvider>
  );
}

export default observer(App);
