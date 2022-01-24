import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../home/HomePage";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/Form/ActivityForm";
import ActivityDetails from "../../features/activities/Details/ActivityDetails";
import LayoutRoute from "./LayoutRoute";

function App() {
  const location = useLocation();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* We have used outlet to achieve the layout route */}
        <Route element={<LayoutRoute />}>
          <Route path="/activities" element={<ActivityDashboard />}></Route>
          <Route path="/activities/:id" element={<ActivityDetails />}></Route>
          <Route path="/dashboard" element={<ActivityDashboard />}></Route>
          {["/createActivity", "/manage/:id"].map((path, index) => {
            return (
              <Route
                path={path}
                element={<ActivityForm />}
                key={location.key}
              />
            );
          })}
        </Route>
        <Route
          path="*"
          element={
            <div
              style={{
                height: "100vh",
                background: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 style={{ padding: "0", margin: "0" }}>Page not found :)</h2>
            </div>
          }
        />
      </Routes>
    </LocalizationProvider>
  );
}

export default observer(App);
