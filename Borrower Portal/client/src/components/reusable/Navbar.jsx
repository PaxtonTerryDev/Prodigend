import * as React from "react";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { logout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
// List Item Imports
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import UploadFileSharpIcon from "@mui/icons-material/UploadFileSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import HolidayVillageSharpIcon from "@mui/icons-material/HolidayVillageSharp";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";
import { changePage } from "../../redux/portalSlice";

const mdTheme = createTheme();

function BorrowerDashboard() {
  const dispatch = useDispatch();
  const setPage = (page) => dispatch(changePage(page));
  const { firstName, lastName } = useSelector((state) => state.user.userInfo);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [mainListItems, setListItems] = useState([
    "Dashboard",
    "Documents",
    "Signatures",
  ]);
  const mainListIcons = {
    Dashboard: <DashboardIcon />,
    Documents: <UploadFileSharpIcon />,
    Signatures: <CreateSharpIcon />,
  };
  // const [secondaryListItems, setSecondaryListItems] = useState([
  //   "New Application",
  //   "Personal Info",
  //   "Employment",
  //   "Assets and Liabilities",
  //   "Property Owned",
  //   "Loan Info",
  // ]);
  // const secondaryListIcons = {
  //   "New Application": <FiberNewOutlinedIcon />,
  //   "Personal Info": <PersonSharpIcon />,
  //   Employment: <BusinessCenterSharpIcon />,
  //   "Assets and Liabilities": <AttachMoneySharpIcon />,
  //   "Property Owned": <HouseSharpIcon />,
  //   "Loan Info": <HolidayVillageSharpIcon />,
  // };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {` ${firstName} ${lastName}`}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary" onClick={dispatch(logout())}>
                <LogoutOutlinedIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toggleDrawer}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          {/* <Divider /> */}
          <ListSubheader>My Loan</ListSubheader>
          <List component="nav">
            {mainListItems.map((item) => {
              return (
                <ListItemButton key={item}>
                  <ListItemIcon>{mainListIcons[item]}</ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              );
            })}
            {/* <Divider sx={{ my: 1 }} />
             <ListSubheader>Application Details</ListSubheader>
             {secondaryListItems.map((item) => {
               return (
                <ListItemButton key={item}>
                   <ListItemIcon>{secondaryListIcons[item]}</ListItemIcon>
                 <ListItemText primary={item} />
                 </ListItemButton>
               );
             })} */}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default function Navbar() {
  return <BorrowerDashboard />;
}
