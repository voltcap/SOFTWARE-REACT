import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportIcon from '@mui/icons-material/Support';
import FlightIcon from '@mui/icons-material/Flight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const SideMenuManager = () => {
    const navigate = useNavigate();
    const [openFlights, setOpenFlights] = React.useState(false);
    const [openStaff, setOpenStaff] = React.useState(false);

    const handleFlightsClick = () => {
        setOpenFlights(!openFlights);
    };

    const handleStaffClick = () => {
        setOpenStaff(!openStaff);
    };

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav">
            <ListItemButton onClick={() => navigate("/ManagerProfile/MyProfile")}>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
            </ListItemButton>
            
            <ListItemButton onClick={() => navigate("/ManagerProfile/Support")}>
                <ListItemIcon>
                    <SupportIcon />
                </ListItemIcon>
                <ListItemText primary="Support Management" />
            </ListItemButton>
            
            <ListItemButton onClick={handleFlightsClick}>
                <ListItemIcon>
                    <FlightIcon />
                </ListItemIcon>
                <ListItemText primary="Flights" />
                {openFlights ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openFlights} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/ManagerProfile/FlightOperations")}>
                        <ListItemIcon>
                            <AnalyticsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Flight Operations" />
                    </ListItemButton>
                </List>
            </Collapse>
            
            <ListItemButton onClick={handleStaffClick}>
                <ListItemIcon>
                    <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Staff Management" />
                {openStaff ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStaff} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/ManagerProfile/StaffList")}>
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="Staff List" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    )
}

export default SideMenuManager;
