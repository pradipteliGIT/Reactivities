import {
  Divider,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Calendar from "react-calendar";

const ActivityFilters = () => {
  return (
    <>
      <Paper sx={{ width: "100%", marginTop: "44px" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <FilterAltIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <Typography variant="inherit" color="#1976d2">
              Filters
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
      <Paper sx={{ width: "100%", marginTop: "10px" }}>
        <MenuList>
          <MenuItem>
            <Typography variant="inherit" noWrap>
              All Activities
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Typography variant="inherit" noWrap>
              I'm going
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Typography variant="inherit" noWrap>
              I'm hosting
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
      <Paper sx={{ mt: "10px" }}>
        <Calendar className={["custom-react-calendar"]} />
      </Paper>
    </>
  );
};

export default ActivityFilters;
