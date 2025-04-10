import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Divider } from '@mui/material';
import axios from 'axios';

import Antalya from '../assets/Antalya.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AdminAddDestination = () => {
    const [cities, setCities] = useState([]);
    const [newCity, setNewCity] = useState({ name: '', country: '' });
    const [showInput, setShowInput] = useState(false);

    const fetchCities = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/cities');
            setCities(response.data);
        } catch (error) {
            console.error('Şehirler alınamadı:', error);
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);

    const handleAddClick = () => setShowInput(true);

    const handleSaveClick = async () => {
        if (!newCity.name.trim() || !newCity.country.trim()) {
            alert("City name and country cannot be empty.");
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/cities', newCity);
            setNewCity({ name: '', country: '' });
            setShowInput(false);
            fetchCities();
        } catch (err) {
            console.error("Şehir eklenemedi:", err);
            alert("City could not be added.");
        }
    };

    const handleRemoveClick = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/cities/${id}`);
            fetchCities();
        } catch (err) {
            console.error("Şehir silinemedi:", err);
            alert("City could not be deleted.");
        }
    };

    return (
        <Grid container spacing={2} direction="column" sx={{ p: 2 }}>

            <Grid container spacing={2} justifyContent="center">
                {cities.map((city) => (
                    <Grid item xs={12} md={4} key={city.id}>
                        <Item>
                            <CardMedia
                                component="img"
                                alt="Destination"
                                image={Antalya}
                                sx={{ width: '100%', height: 150, objectFit: 'cover', mb: 1 }}
                            />
                            <Typography variant="h6">{city.name}</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="body2">{city.country}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                <Fab
                                    size="small"
                                    aria-label="remove"
                                    sx={{ backgroundColor: '#d84315' }}
                                    onClick={() => handleRemoveClick(city.id)}
                                >
                                    <RemoveIcon />
                                </Fab>
                            </Box>
                        </Item>
                    </Grid>
                ))}
            </Grid>


            <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                {!showInput ? (
                    <Fab aria-label="add" sx={{ backgroundColor: '#2e7d32' }} onClick={handleAddClick}>
                        <AddIcon />
                    </Fab>
                ) : (
                    <Fab variant="extended" onClick={handleSaveClick}>
                        <CheckIcon sx={{ mr: 1 }} />
                        Save
                    </Fab>
                )}
            </Grid>


            {showInput && (
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="City Name"
                            value={newCity.name}
                            onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Country"
                            value={newCity.country}
                            onChange={(e) => setNewCity({ ...newCity, country: e.target.value })}
                            required
                        />
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default AdminAddDestination;