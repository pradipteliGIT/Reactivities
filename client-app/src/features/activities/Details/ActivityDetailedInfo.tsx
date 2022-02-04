import { Divider, List, ListItem } from "@mui/material";

const ActivityDetailedInfo = () => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        margin: "10px 0 10px",
      }}
    >
      <ListItem>1</ListItem>
      <Divider />
      <ListItem>2</ListItem>
      <Divider />
      <ListItem>3</ListItem>
    </List>
  );
};

export default ActivityDetailedInfo;
