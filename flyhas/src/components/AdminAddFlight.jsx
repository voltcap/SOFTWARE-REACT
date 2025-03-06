import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import Flightvector from '../assets/Flightvector.png'
import Antalya from '../assets/Antalya.jpg'



import profilephoto from '../assets/profilephoto.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
        justifyContent: "flex-start",
        alignItems: "stretch",
    }),
}));

const ItemInside = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
        boxShadow: 'none',
        border: 'none',
        width: { xs: "30%", sm: "30%", md: "28%", lg: "25%" },

    }),
}));

const AdminAddFlight = () => {
    const flights = [
        { id: 1, from: "İstanbul", to: "Ankara", departure: "08:50", landing: "10:00", date: "12 may 2025" },
        { id: 2, from: "İstanbul", to: "Ankara", departure: "11:30", landing: "13:30", date: "13 May 2025" },
        { id: 3, from: "İstanbul", to: "Ankara", departure: "16:20", landing: "18:00", date: "14 Dec 2025" }
    ];

    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="column"
            sx={{
                justifyContent: "flex-start",
                alignItems: "stretch",
            }}>
            <Grid container size={{ xs: 4, sm: 8, md: 12, lg: 12 }} direction="column"
                sx={{
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                }}>
                <Card direction="column"
                    sx={{
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        display: 'flex'
                    }} >
                    <CardMedia
                        component="img"
                        alt="SupportProfile"

                        image={Flightvector}
                        sx={{
                            width: { xs: "0%", sm: "0%", md: "16%", lg: "38%" },
                            height: "auto",
                            objectFit: "contain",

                        }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%", }}>
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            width: { xs: "55%", sm: "70%", md: "80%", lg: "85%" },
                        }}>
                            <ItemInside><Typography variant="body2" component="div" sx={{ textAlign: "center" }}>
                                Istanbul
                            </Typography></ItemInside>
                            <ItemInside><Typography variant="body2" component="div" sx={{ textAlign: "center" }}>
                                Ankara
                            </Typography></ItemInside>
                            <ItemInside><Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "center" }}>
                                16:30
                            </Typography></ItemInside>
                            <ItemInside><Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "center" }}>
                                18:30
                            </Typography></ItemInside>
                            <ItemInside><Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "center" }}>
                                12 May 2025
                            </Typography></ItemInside>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: "flex-end", }}>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <Fab color="secondary" aria-label="edit" >
                                    <CheckIcon />
                                </Fab>
                            </Box>
                        </CardActions>
                    </Box>
                </Card>




            </Grid>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}></Grid>
                {/*Buttons*/}
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab aria-label="add" sx={{ backgroundColor: '#2e7d32' }}>
                            <AddIcon />
                        </Fab>
                        <Fab aria-label="edit" sx={{ backgroundColor: '#d84315' }}>
                            <RemoveIcon />
                        </Fab>
                        <Fab variant="extended">
                            <CheckIcon sx={{ mr: 1 }} />
                            Save
                        </Fab>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                <Grid container spacing={2} size={{ xs: 4, sm: 8, md: 12, lg: 12 }} direction="row"
                    sx={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="From"
                        defaultValue="İstanbul"
                        sx={{ width: '49%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="To"
                        defaultValue="Ankara"
                        sx={{ width: '49%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Departure"
                        defaultValue="12:00"
                        sx={{ width: '32%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Landing"
                        defaultValue="15:30"
                        sx={{ width: '32%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Date"
                        defaultValue="12 May 2026"
                        sx={{ width: '32%' }}
                    />

                </Grid>

            </Grid>

        </Grid>
    )
}

export default AdminAddFlight