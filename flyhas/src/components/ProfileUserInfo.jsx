import React from 'react'
import Grid from '@mui/material/Grid2';
import profilephoto from '../assets/profilephoto.png';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';





const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    boxShadow: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',

}));


const ProfileUserInfo = ({ Profile1 }) => {
    return (
        <Grid container spacing={1} alignItems="stretch" sx={{ display: 'flex', flexGrow: 1 }}>
            <Grid container size={{ xs: 12, md: 5, lg: 12 }} spacing={0} alignItems="stretch" >
                <Grid size={{ xs: 6, lg: 4 }}>
                    <Box
                        component="img"
                        src={profilephoto}
                        alt="profile pic"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />

                </Grid>
                <Grid container spacing={0} size={{ xs: 6, md: 5, lg: 8 }} alignItems="stretch" >
                    <Grid size={{ xs: 6, lg: 12 }} >
                        <Item>{Profile1.name}</Item>
                    </Grid>
                    <Grid size={{ xs: 6, lg: 12 }} >
                        <Divider></Divider>
                    </Grid>
                    <Grid size={{ xs: 6, lg: 12 }} >
                        <Item>{Profile1.birth}</Item>
                    </Grid>
                    <Grid size={{ xs: 6, lg: 12 }} >
                        <Item>{Profile1.gender}</Item>
                    </Grid>
                    <Grid size={{ xs: 6, lg: 12 }} >
                        <Item>{Profile1.identityno}</Item>
                    </Grid>
                    <Grid size={{ xs: 6, lg: 12 }} >
                        <Button variant="outlined" size="small">
                            Small
                        </Button>
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    )
}

export default ProfileUserInfo