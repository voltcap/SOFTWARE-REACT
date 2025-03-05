import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import ProfileUserInfo from '../components/ProfileUserInfo';




const ProfilePage = () => {

    const [Profile1] = useState({
        name: "Berke Doğan", birth: "22/05/1996", gender: "Male", identityno: "346578430880", phonenumber: "+90 532 456 78 89", mail: "berkeley@khas.edu.tr"
    }
    );



    return (
        <Box sx={{
            bgcolor: "#E3F2FD", display: 'flex', p: 2, gap: 2, minHeight: "100vh",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" }
        }}>
            <Grid container spacing={2} sx={{ width: "100%" }}>
                {/* Sidebar */}
                <Grid item xs={12} md={3} lg={2} sx={{ display: 'flex', justifyContent: "center" }}>
                    <Box p={0} sx={{
                        width: { xs: "100%", sm: "80%", md: "100%" },
                        maxWidth: 360,
                        bgcolor: "white",
                        borderRadius: 2,
                        boxShadow: 3,
                    }}>
                        <nav aria-label="Profile Bar">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AccountCircleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="My Profile" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ConnectingAirportsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Flights" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={9} lg={10}>
                    <Box p={2} sx={{
                        width: "100%",
                        bgcolor: "white",
                        borderRadius: 2,
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "70vh"
                    }}>
                        <ProfileUserInfo Profile1={Profile1} />
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}

export default ProfilePage