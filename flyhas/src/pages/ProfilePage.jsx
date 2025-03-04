import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
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
            bgcolor: "#E3F2FD", display: 'flex', p: 2, gap: 2, height: 900,
            flexGrow: 0,
        }}>
            <Grid container spacing={2} alignItems="flex-start" sx={{ display: 'flex', flexGrow: 1 }}>
                <Grid container size={{ xs: 12, md: 5, lg: 2 }} spacing={2} sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Box p={0} sx={{
                        width: '100%', maxWidth: 360,
                        height: 'auto',
                        flexGrow: 0,
                        bgcolor: "white",
                        borderRadius: 2,
                        border: 0,
                        boxShadow: 3,
                    }}>
                        <nav aria-label="Profile Bar">
                            <List>
                                <ListItem disablePadding sx={{ borderRadius: '3' }}>
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
                                        <ListItemText primary="Flighs" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>


                    </Box>
                </Grid>
                <Grid container size={{ xs: 12, md: 5, lg: 10 }} spacing={2} sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Box p={2} sx={{
                        width: '97%', height: 'auto',
                        flexGrow: 1,
                        bgcolor: "white",
                        borderRadius: 2,
                        border: 0,
                        boxShadow: 3,
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <ProfileUserInfo Profile1={Profile1} />
                    </Box>

                </Grid>
            </Grid>
        </Box>


    )
}

export default ProfilePage