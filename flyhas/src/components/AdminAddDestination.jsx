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
import CardMedia from '@mui/material/CardMedia';
import Antalya from '../assets/Antalya.jpg'
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

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

const AdminAddDestination = () => {

    const [destinations, setDestinations] = useState([
        { id: 1, city: "İstanbul", country: "Turkey" },
        { id: 2, city: "Ankara", country: "Turkey" },
        { id: 3, city: "İzmir", country: "Turkey" }
    ]);

    const [newDestination, setNewDestination] = useState({ city: '', country: '' });
    const [showInput, setShowInput] = useState(false);

    const handleAddClick = () => {
        setShowInput(true);
    };

    const handleSaveClick = () => {
        if (newDestination.city && newDestination.country) {
            setDestinations([...destinations, { id: destinations.length + 1, ...newDestination }]);
            setNewDestination({ city: '', country: '' });
            setShowInput(false);
        }
    };

    const handleRemoveClick = (id) => {
        setDestinations(destinations.filter(destination => destination.id !== id));
    };


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
                <Grid container size={{ xs: 4, sm: 8, md: 12, lg: 12 }} direction="row"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                    {destinations.map((destination) => (<Grid size={{ xs: 12, sm: 8, md: 4, lg: 4 }} key={destination.id}>
                        <Item direction="row"
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}>

                            <CardMedia
                                component="img"
                                alt="SupportProfile"

                                image={Antalya}
                                sx={{
                                    width: '100%',
                                    height: "auto",
                                    objectFit: "contain",

                                }}
                            />
                            <Typography>{destination.city}</Typography>
                            <Divider></Divider>
                            <Typography>{destination.country}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                <Fab
                                    size="small"
                                    aria-label="remove"
                                    sx={{ backgroundColor: '#d84315' }}
                                    onClick={() => handleRemoveClick(destination.id)}
                                >
                                    <RemoveIcon />
                                </Fab>
                            </Box>

                        </Item>
                    </Grid>))}

                </Grid>


            </Grid>

            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}></Grid>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        {!showInput && (
                            <Fab aria-label="add" sx={{ backgroundColor: '#2e7d32' }} onClick={handleAddClick}>
                                <AddIcon />
                            </Fab>
                        )}
                        {showInput && (
                            <Fab variant="extended" onClick={handleSaveClick}>
                                <CheckIcon sx={{ mr: 1 }} />
                                Save
                            </Fab>
                        )}

                    </Box>
                </Grid>
            </Grid>
            {showInput && (<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} ddirection="row"
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
                        label="City"
                        value={newDestination.city}
                        onChange={(e) => setNewDestination({ ...newDestination, city: e.target.value })}
                        sx={{ width: '49%' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Country"
                        value={newDestination.country}
                        onChange={(e) => setNewDestination({ ...newDestination, country: e.target.value })}
                        sx={{ width: '49%' }}
                    />

                </Grid>

            </Grid>)}

        </Grid>
    )
}

export default AdminAddDestination