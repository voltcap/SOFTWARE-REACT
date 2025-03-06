import React from 'react'
import { styled } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import SideMenuProfile from '../components/SideMenuProfile';

import backgroundImage from '../assets/Background.png';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const AdminPage = () => {
    return (
        <Box sx={{
            justifyContent: "space-evenly",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            alignItems: { md: "flex-start" },
            p: 2, gap: 2,
        }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                }}>
                <Grid size={{ xs: 4, sm: 9, md: 3 }}>
                    <Item><SideMenuProfile /></Item>
                </Grid>
                <Grid container size={{ xs: 4, sm: 9, md: 9 }} direction="column"
                    sx={{
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                    }}>
                    <Grid container spacing={2} size={{ xs: 4, sm: 8, md: 12, lg: 12 }} direction="column" sx={{
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                    }} >
                        {/*<Item><AdminInfo /></Item>*/}
                        <Item><Outlet /></Item>

                    </Grid>
                    <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>

                    </Grid>

                </Grid>


            </Grid>
        </Box>

    )
}

export default AdminPage