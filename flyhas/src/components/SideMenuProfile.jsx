import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportIcon from '@mui/icons-material/Support';
import FlightIcon from '@mui/icons-material/Flight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const SideMenuProfile = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"

        >
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SupportIcon />
                </ListItemIcon>
                <ListItemText primary="Support Requests" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <FlightIcon />
                </ListItemIcon>
                <ListItemText primary="Flights" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Flight" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Destination" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    )
}

export default SideMenuProfile