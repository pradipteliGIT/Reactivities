import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "../ActivityListItem/ActivityListItem";
import { Button } from "@mui/material";

const ActivityList = () => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <>
          <Button sx={{ ml: 2, mb: -1 }} variant="outlined" color="primary">
            {group}
          </Button>
          {activities.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </>
      ))}
    </>
  );
};

export default observer(ActivityList);
