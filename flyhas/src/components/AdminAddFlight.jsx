import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid, Paper, Box, Fab, TextField,
    Card, CardContent, CardMedia, CardActions, Typography,
    Select, MenuItem, InputLabel, FormControl, Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Flightvector from '../assets/Flightvector.png';

const ItemInside = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AdminAddFlight = () => {
    const [flights, setFlights] = useState([]);
    const [cities, setCities] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newFlight, setNewFlight] = useState({
        origin: '',
        destination: '',
        departureTime: '',
        arrivalTime: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const flightApiUrl = "http://localhost:8080/api/flights";
    const cityApiUrl = "http://localhost:8080/api/cities";

    useEffect(() => {
        fetchFlights();
        fetchCities();
    }, []);

    const fetchFlights = () => {
        axios.get(flightApiUrl)
            .then(res => {
                if (Array.isArray(res.data)) {
                    setFlights(res.data);
                } else {
                    console.error("Beklenen formatta veri gelmedi");
                }
            })
            .catch(err => console.error("GET error", err));
    };

    const fetchCities = () => {
        axios.get(cityApiUrl)
            .then(res => {
                if (Array.isArray(res.data)) {
                    setCities(res.data);
                }
            })
            .catch(err => console.error("Şehirler alınamadı", err));
    };

    const handleAddFlight = () => {
        setShowForm(true);
        setErrorMessage('');
    };

    const handleSaveFlight = () => {
        const { origin, destination, departureTime, arrivalTime } = newFlight;

        // Boş alan kontrolü
        if (!origin || !destination || !departureTime || !arrivalTime) {
            setErrorMessage("Tüm alanlar doldurulmalıdır.");
            return;
        }

        // Aynı şehir kontrolü
        if (origin === destination) {
            setErrorMessage("Origin ve Destination aynı olamaz.");
            return;
        }

        const now = new Date().toISOString();
        if (departureTime < now || arrivalTime < now) {
            setErrorMessage("Tarihler geçmiş olamaz.");
            return;
        }

        if (departureTime >= arrivalTime) {
            setErrorMessage("Departure, Arrival'dan önce olmalıdır.");
            return;
        }

        // Hata yoksa POST işlemi
        axios.post(flightApiUrl, newFlight)
            .then(() => {
                fetchFlights();
                setNewFlight({ origin: '', destination: '', departureTime: '', arrivalTime: '' });
                setShowForm(false);
                setErrorMessage('');
            })
            .catch(err => console.error("POST error", err));
    };

    const handleDeleteFlight = (id) => {
        axios.delete(`${flightApiUrl}/${id}`)
            .then(() => fetchFlights())
            .catch(err => console.error("DELETE error", err));
    };

    return (
        <Grid container spacing={2} direction="column">
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

            {showForm && (
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="origin-label">Origin</InputLabel>
                                <Select
                                    labelId="origin-label"
                                    value={newFlight.origin}
                                    label="Origin"
                                    onChange={(e) => setNewFlight({ ...newFlight, origin: e.target.value })}
                                >
                                    {cities.map((city) => (
                                        <MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="destination-label">Destination</InputLabel>
                                <Select
                                    labelId="destination-label"
                                    value={newFlight.destination}
                                    label="Destination"
                                    onChange={(e) => setNewFlight({ ...newFlight, destination: e.target.value })}
                                >
                                    {cities.map((city) => (
                                        <MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
                        {errorMessage && (
                            <Grid item xs={12}>
                                <Alert severity="error">{errorMessage}</Alert>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default AdminAddFlight;