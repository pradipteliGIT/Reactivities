import { Backdrop, CircularProgress } from "@mui/material";

import React from "react";

interface Props {
  invisible?: boolean;
  label?: string;
}

const Loading = ({ invisible = false, label = "Loading data" }: Props) => {
  return (
    <Backdrop
      invisible={invisible}
      sx={{
        color: "#fff",
        zIndex: 1000000,
      }}
      open={true}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" />
        <p style={{ color: "gray" }}> {label}</p>
      </div>
    </Backdrop>
  );
};

export default Loading;
