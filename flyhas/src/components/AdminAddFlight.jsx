import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid, Paper, Box, Fab, TextField,
    Card, CardContent, CardMedia, CardActions, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Flightvector from '../assets/Flightvector.png';

// Kendi stillerini kullanmaya devam edelim
const ItemInside = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AdminAddFlight = () => {
    const [flights, setFlights] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newFlight, setNewFlight] = useState({
        origin: '',
        destination: '',
        departureTime: '',
        arrivalTime: ''
    });

    const apiUrl = "http://localhost:8080/api/flights";  // Backend API URL

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = () => {
        axios.get(apiUrl)
            .then(res => {
                if (Array.isArray(res.data)) {
                    setFlights(res.data);  // Eğer gelen veri bir dizi ise, state'e atıyoruz
                } else {
                    console.error("Beklenen formatta veri gelmedi");
                }
            })
            .catch(err => console.error("GET error", err));
    };

    const handleAddFlight = () => setShowForm(true);

    const handleSaveFlight = () => {
        const isEmpty = Object.values(newFlight).some(val => val.trim() === "");
        if (isEmpty) return;

        // API'ye uçuşu gönderme
        axios.post(apiUrl, newFlight)
            .then(() => {
                fetchFlights();  // Yeniden uçuşları çek
                setNewFlight({ origin: '', destination: '', departureTime: '', arrivalTime: '' });
                setShowForm(false);  // Formu kapat
            })
            .catch(err => console.error("POST error", err));
    };

    const handleDeleteFlight = (id) => {
        // Uçuş silme işlemi
        axios.delete(`${apiUrl}/${id}`)
            .then(() => fetchFlights())  // Uçuş silindikten sonra uçuşları yeniden yükle
            .catch(err => console.error("DELETE error", err));
    };

    return (
        <Grid container spacing={2} direction="column">
            {/* Uçuş Kartları */}
            {flights.map((flight) => (
                <Grid item key={flight.id}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            alt="Flight"
                            image={Flightvector}
                            sx={{ width: "30%", objectFit: "contain" }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
                            <CardContent sx={{ display: "flex", gap: 2 }}>
                                <ItemInside><Typography>{flight.origin}</Typography></ItemInside>
                                <ItemInside><Typography>{flight.destination}</Typography></ItemInside>
                                <ItemInside><Typography>{flight.departureTime}</Typography></ItemInside>
                                <ItemInside><Typography>{flight.arrivalTime}</Typography></ItemInside>
                            </CardContent>
                            <CardActions>
                                <Fab color="secondary" onClick={() => handleDeleteFlight(flight.id)}>
                                    <DeleteIcon />
                                </Fab>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            ))}

            {/* Ekle Butonu */}
            <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="success" onClick={handleAddFlight}>
                        <AddIcon />
                    </Fab>
                    {showForm && (
                        <Fab variant="extended" onClick={handleSaveFlight}>
                            <CheckIcon sx={{ mr: 1 }} /> Kaydet
                        </Fab>
                    )}
                </Box>
            </Grid>

            {/* Form */}
            {showForm && (
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Origin"
                                fullWidth
                                value={newFlight.origin}
                                onChange={(e) => setNewFlight({ ...newFlight, origin: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Destination"
                                fullWidth
                                value={newFlight.destination}
                                onChange={(e) => setNewFlight({ ...newFlight, destination: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Departure Time"
                                type="datetime-local"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={newFlight.departureTime}
                                onChange={(e) => setNewFlight({ ...newFlight, departureTime: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Arrival Time"
                                type="datetime-local"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={newFlight.arrivalTime}
                                onChange={(e) => setNewFlight({ ...newFlight, arrivalTime: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default AdminAddFlight;