import React from 'react'
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SideMenuManager from '../components/SideMenuManager';
import { Outlet } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ManagerPage = () => {
    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
            sx={{
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                minHeight: "80vh"
            }}>
            <Grid size={{ xs: 4, sm: 8, md: 3, lg: 3 }}>
                <Item elevation={1}>
                    <SideMenuManager />
                </Item>
            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 9, lg: 9 }}>
                <Item elevation={1} sx={{ minHeight: "80vh" }}>
                    <Outlet />
                </Item>
            </Grid>
        </Grid>
    )
}

export default ManagerPage
