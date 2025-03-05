import React from 'react';
import Grid from '@mui/material/Grid';
import profilephoto from '../assets/profilephoto.png';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
}));

const ProfileUserInfo = ({ Profile1 }) => {
    return (
        <Grid container spacing={2} alignItems="center" sx={{ display: 'flex', flexGrow: 1, flexDirection: { xs: 'column', md: 'row' } }}>
            {/* Profile Image */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                    component="img"
                    src={profilephoto}
                    alt="profile pic"
                    sx={{
                        width: { xs: "60%", md: "100%" },
                        maxWidth: 150,
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: '50%',
                    }}
                />
            </Grid>

            {/* Profile Info */}
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>{Profile1.name}</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item>{Profile1.birth}</Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item>{Profile1.gender}</Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item>{Profile1.identityno}</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" size="small" fullWidth>
                            Edit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProfileUserInfo;