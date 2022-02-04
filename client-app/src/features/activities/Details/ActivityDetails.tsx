import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

const ActivityDetails = () => {
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
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <ActivityDetailedHeader
          source={`/asset/categoryImages/${activity.category}.jpg`}
          date={activity.date}
          title={activity.title}
        />
        <ActivityDetailedInfo />
        <ActivityDetailedChat />
      </Grid>
      <Grid item xs={4}>
        <ActivityDetailedSidebar />
      </Grid>
    </Grid>
  );
};

export default observer(ActivityDetails);
