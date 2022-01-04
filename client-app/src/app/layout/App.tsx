import React, { useEffect, useState } from "react";
import Activity from "../models/activity";
import Navbar from "./Navbar/Navbar";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Loading from "../../shared/Loading/Loading";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find((activity) => activity.id === id));
    setEditMode(editMode ? false : editMode);
  };

  const handleCancelActivity = () => {
    setSelectedActivity(undefined);
    setEditMode(false);
  };

  const handleEditMode = (id?: string) => {
    id ? handleSelectedActivity(id) : handleCancelActivity();
    setEditMode(true);
  };

  const handleCancelEditMode = () => {
    handleCancelActivity();
    setEditMode(false);
  };

  const handleCreateOrEdit = (activity: Activity) => {
    setSubmitting(true);

    //Edit
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activities.filter((a) => a.id !== activity.id),
          activity,
        ]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  };

  const handleDelete = (id: string) => {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((activity) => activity.id !== id)]);
      if (selectedActivity?.id === id) handleCancelActivity();
      setSubmitting(false);
    });
  };

  useEffect(() => {
    agent.Activities.list().then((response) => {
      const activities: Activity[] = [];

      response.forEach((activity) => {
        activity.date = activity?.date?.split("T")[0] || "";
        activities.push(activity);
      });
      setActivities(activities);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading invisible={true} label="Loading..." />;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Navbar handleEditMode={handleEditMode} />
      <ActivityDashboard
        activities={activities}
        selectedActivity={selectedActivity}
        handleSelectedActivity={handleSelectedActivity}
        handleCancelActivity={handleCancelActivity}
        editMode={editMode}
        handleEditMode={handleEditMode}
        handleCancelEditMode={handleCancelEditMode}
        createOrEdit={handleCreateOrEdit}
        handleDelete={handleDelete}
        submitting={submitting}
      />
    </LocalizationProvider>
  );
}

export default App;
