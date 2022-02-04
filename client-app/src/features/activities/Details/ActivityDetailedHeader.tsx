import { Button, Typography } from "@mui/material";
import React from "react";
interface Props {
  source: string;
  title: string;
  date: string;
}

const ActivityDetailedHeader = ({ source, title, date }: Props) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={source}
          alt="header"
          style={{ filter: "brightness(30%)", width: "100%" }}
        />
        <div style={{ position: "absolute", bottom: "5%", color: "#FAFAFA" }}>
          <Typography
            sx={{ mt: 1, ml: 9, mb: 1 }}
            color="#FAFAFA"
            display="block"
            variant="h4"
          >
            {title}
          </Typography>
          <Typography
            sx={{ mt: 1, ml: 9, mb: 1 }}
            color="#FAFAFA"
            display="block"
            variant="caption"
          >
            {date}
          </Typography>
          <Typography
            sx={{ mt: 1, ml: 9, mb: 1 }}
            color="#FAFAFA"
            display="block"
            variant="h6"
          >
            Hosted by bob
          </Typography>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Button variant="contained">Join Activity</Button> &nbsp;&nbsp;
        <Button variant="contained" sx={{ color: "black", background: "gray" }}>
          Cancel Attendance
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="secondary" sx={{ float: "right" }}>
          Manage Event
        </Button>
      </div>
    </>
  );
};

export default ActivityDetailedHeader;
