import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import BookingError from '../assets/BookingError.png';

const UserSupport = () => {
    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="column"
            sx={{
                justifyContent: "flex-start",
                alignItems: "stretch",
            }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            alt="SupportProfile"

                            image={BookingError}
                            sx={{
                                width: { xs: "14%", sm: "14%", md: "14%", lg: "14%" },
                                height: "auto",
                                aspectRatio: "1 / 1",
                                objectFit: "fill",
                            }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left" }}>
                                    Unable to make reservation
                                </Typography>
                                <Typography gutterBottom variant="h9" component="div" sx={{ textAlign: "left" }}>
                                    Taner Arslan / Role: ( Signed User)
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "left" }}>
                                    I was trying to make reservation for Ankara Istanbul flight but web site give me error with 345 code. Could you help me?
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                    <Fab size="small" aria-label="add" sx={{ backgroundColor: '#ff3d00' }}>
                                        <AutoDeleteIcon />
                                    </Fab>
                                    <Fab size="small" color="secondary" aria-label="edit">
                                        <RotateLeftIcon />
                                    </Fab>
                                    <Fab size="small" variant="extended">
                                        <SupportAgentIcon sx={{ mr: 1 }} />
                                        Live Agent
                                    </Fab>
                                </Box>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>




            </Grid>
            <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Fab aria-label="add" sx={{ backgroundColor: '#2e7d32' }} >
                        <AddIcon />
                    </Fab>

                </Box>
            </Grid>


        </Grid>
    )
}

export default UserSupport