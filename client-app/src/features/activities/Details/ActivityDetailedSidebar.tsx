import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";

const ActivityDetailedSidebar = () => {
  return (
    <Paper>
      <div
        style={{
          background: "rgb(32, 167, 172)",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          color: "white",
          fontWeight: 500,
        }}
      >
        3 People going
      </div>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="/asset/user.png" />
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "orange" }}
            primary="Bob"
            secondary="following"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar src="/asset/user.png" />
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "orange" }}
            primary="Bob"
            secondary="following"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar src="/asset/user.png" />
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "orange" }}
            primary="Bob"
            secondary="following"
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ActivityDetailedSidebar;
