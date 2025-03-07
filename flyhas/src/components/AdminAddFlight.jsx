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
import DeleteIcon from '@mui/icons-material/Delete';



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

    const [flights, setFlights] = useState([
        { id: 1, from: "İstanbul", to: "Ankara", departure: "08:50", landing: "10:00", date: "12 May 2025" }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [newFlight, setNewFlight] = useState({ from: '', to: '', departure: '', landing: '', date: '' });

    const handleAddFlight = () => {
        setShowForm(true);
    };

    const handleSaveFlight = () => {
        if (!newFlight.from || !newFlight.to || !newFlight.departure || !newFlight.landing || !newFlight.date) return;
        setFlights([...flights, { id: flights.length + 1, ...newFlight }]);
        setNewFlight({ from: '', to: '', departure: '', landing: '', date: '' });
        setShowForm(false);
    };

    const handleDeleteFlight = (id) => {
        setFlights(flights.filter(flight => flight.id !== id));
    };


    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="column"
            sx={{
                justifyContent: "flex-start",
                alignItems: "stretch",
            }}>
            {flights.map((flight) => (<Grid container size={{ xs: 4, sm: 8, md: 12, lg: 12 }} direction="column"
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
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
                        <CardContent sx={{ display: "flex", gap: 2 }}>
                            <ItemInside><Typography>{flight.from}</Typography></ItemInside>
                            <ItemInside><Typography>{flight.to}</Typography></ItemInside>
                            <ItemInside><Typography>{flight.departure}</Typography></ItemInside>
                            <ItemInside><Typography>{flight.landing}</Typography></ItemInside>
                            <ItemInside><Typography>{flight.date}</Typography></ItemInside>
                        </CardContent>
                        <CardActions>
                            <Fab color="secondary" onClick={() => handleDeleteFlight(flight.id)}>
                                <DeleteIcon />
                            </Fab>
                        </CardActions>
                    </Box>
                </Card>
            </Grid>))}

            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}></Grid>
                {/*Buttons*/}
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab aria-label="add" onClick={handleAddFlight} sx={{ backgroundColor: '#2e7d32' }}>
                            <AddIcon />
                        </Fab>
                        {showForm && (
                            <Fab onClick={handleSaveFlight} variant="extended">
                                <CheckIcon sx={{ mr: 1 }} />
                                Save
                            </Fab>)}

                    </Box>
                </Grid>
            </Grid>
            {showForm && (<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
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
                        value={newFlight.from} onChange={(e) => setNewFlight({ ...newFlight, from: e.target.value })}
                        sx={{ width: '49%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="To"
                        value={newFlight.to} onChange={(e) => setNewFlight({ ...newFlight, to: e.target.value })}
                        sx={{ width: '49%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Departure"
                        value={newFlight.departure} onChange={(e) => setNewFlight({ ...newFlight, departure: e.target.value })}
                        sx={{ width: '32%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Landing"
                        value={newFlight.landing} onChange={(e) => setNewFlight({ ...newFlight, landing: e.target.value })}
                        sx={{ width: '32%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Date"
                        value={newFlight.date} onChange={(e) => setNewFlight({ ...newFlight, date: e.target.value })}
                        sx={{ width: '32%' }}
                    />

                </Grid>

            </Grid>)}


        </Grid>
    )
}

export default AdminAddFlight