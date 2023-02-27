import * as React from "react";
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

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My Loan" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <UploadFileSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Documents" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <CreateSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Signatures" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Application Details
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <PersonSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Information" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <BusinessCenterSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Employment / Income" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AttachMoneySharpIcon />
      </ListItemIcon>
      <ListItemText primary="Assets / Liabilities" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <HolidayVillageSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Property Owned" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <HouseSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Loan / Property Info" />
    </ListItemButton>
  </React.Fragment>
);
