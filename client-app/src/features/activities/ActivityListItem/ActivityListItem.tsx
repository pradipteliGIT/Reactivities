import {
  Button,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Activity from "../../../app/models/activity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomIcon from "@mui/icons-material/Room";

interface Props {
  activity: Activity;
}
const ActivityListItem = ({ activity }: Props) => {
  // const { activityStore } = useStore();
  // const { deleteActivity } = activityStore;
  // const [setTarget] = useState<string | null>(null);

  // const handleActivityDelete = (
  //   e: SyntheticEvent<HTMLButtonElement>,
  //   id: string
  // ) => {
  //   const targetName = e.currentTarget.name;
  //   setTarget(targetName);
  //   deleteActivity(id);
  // };
  return (
    <Grid key={activity.id} item xs={12}>
      <List>
        <ListItem>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar src="/asset/user.png" />
              </ListItemAvatar>
              <ListItemText
                primary={activity.title}
                secondary="Hosted by bob"
              />
            </ListItem>
            <Divider component="li" variant="inset" />
            <li>
              <Typography
                sx={{ mt: 1, ml: 9, mb: 1 }}
                color="text.primary"
                display="block"
                variant="caption"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon />
                  &nbsp;{activity.date} &nbsp; &nbsp;
                  <RoomIcon /> &nbsp;
                  {activity.venue}
                </div>
              </Typography>
            </li>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                sx={{ mt: 0.5, ml: 7 }}
                primary="Attendees go here"
              />
            </ListItem>
            <Divider component="li" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 5px 0  5px",
                justifyContent: "space-between",
              }}
            >
              <li>
                <Typography
                  sx={{ mt: 1, ml: 9, mb: 1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  {activity.description}
                </Typography>
              </li>
              <NavLink to={`/activities/${activity.id}`}>
                <Button variant="contained" color="primary" size="small">
                  View
                </Button>
              </NavLink>
            </div>
          </List>
        </ListItem>
      </List>
    </Grid>
  );
};

export default ActivityListItem;
