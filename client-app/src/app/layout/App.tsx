import React, { useEffect, useState } from "react";
import axios from "axios";
import Activity from "../models/activity";
import Navbar from "./Navbar/Navbar";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

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
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/Activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  const handleCreateOrEdit = (activity: Activity) => {
    activity.id
      ? setActivities([
          ...activities.filter((a) => a.id !== activity.id),
          activity,
        ])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  };

  const handleDelete = (id: string) => {
    setActivities([...activities.filter((activity) => activity.id !== id)]);
    if (selectedActivity?.id === id) handleCancelActivity();
  };

  return (
    <>
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
      />
    </>
  );
}

export default App;
