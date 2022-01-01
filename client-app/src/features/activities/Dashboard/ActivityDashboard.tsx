import { Grid } from "@material-ui/core";
import React from "react";
import Activity from "../../../app/models/activity";
import ActivityList from "../ActivityList/ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../Form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  handleSelectedActivity: (id: string) => void;
  handleCancelActivity: () => void;
  editMode: boolean;
  handleEditMode: (id?: string) => void;
  handleCancelEditMode: () => void;
  createOrEdit: (activity: Activity) => void;
  handleDelete: (id: string) => void;
}

const ActivityDashboard = ({
  activities,
  selectedActivity,
  editMode,
  handleSelectedActivity,
  handleCancelActivity,
  handleEditMode,
  handleCancelEditMode,
  createOrEdit,
  handleDelete,
}: Props) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Grid container>
        <Grid item xs={8}>
          <ActivityList
            activities={activities}
            handleSelectedActivity={handleSelectedActivity}
            handleDelete={handleDelete}
          />
        </Grid>
        <Grid item xs={4}>
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              handleCancelActivity={handleCancelActivity}
              handleEditMode={handleEditMode}
            />
          )}
          {editMode && (
            <ActivityForm
              activity={selectedActivity}
              handleCancelEditMode={handleCancelEditMode}
              createOrEdit={createOrEdit}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ActivityDashboard;