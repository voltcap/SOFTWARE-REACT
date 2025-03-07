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
import Flight3 from '../assets/Flight3.png'
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import LoopIcon from '@mui/icons-material/Loop';
import UndoIcon from '@mui/icons-material/Undo';

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

const UserReservations = () => {

    const [reservations, setReservations] = useState([
        { id: 1, reservationNumber: "R001", departure: "İstanbul", landing: "Ankara" },
        { id: 2, reservationNumber: "R002", departure: "İzmir", landing: "Antalya" },
        { id: 3, reservationNumber: "R003", departure: "Ankara", landing: "Trabzon" }
    ]);

    const [newDestination, setNewDestination] = useState({ city: '', country: '' });
    const [showInput, setShowInput] = useState(false);

    const navigate = useNavigate();

    const [cancelStatus, setCancelStatus] = useState({});

    const toggleCancel = (id) => {
        setCancelStatus(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
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

                    {reservations.map((reservation) => (<Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} key={reservation.id}>
                        <Item sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 2
                        }}>

                            <CardMedia
                                component="img"
                                alt="SupportProfile"
                                image={Flight3}
                                sx={{
                                    width: 140,
                                    height: 60,
                                    objectFit: "fill",
                                    borderRadius: "8px"
                                }}
                            />
                            <Box sx={{ textAlign: "center" }}>
                                <Typography variant="subtitle2" >Reservation Number:</Typography>
                                <Typography variant="h6" fontWeight="bold">{reservation.reservationNumber}</Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Typography variant="subtitle2">Departure:</Typography>
                                <Typography fontWeight="bold">{reservation.departure}</Typography>
                            </Box>

                            <Box sx={{ textAlign: "center" }}>
                                <Typography variant="subtitle2" >Landing:</Typography>
                                <Typography fontWeight="bold">{reservation.landing}</Typography>
                            </Box>


                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {cancelStatus[reservation.id] && <Typography sx={{ fontSize: '10px' }}>Pending Cancelation</Typography>}
                                <Fab size="small" sx={{ backgroundColor: "#d84315" }} onClick={() => toggleCancel(reservation.id)}>
                                    {cancelStatus[reservation.id] ? <UndoIcon /> : <RemoveIcon />}

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

                        <Fab aria-label="add" sx={{ backgroundColor: '#2e7d32' }} onClick={() => navigate("/FlightList")}>
                            <AddIcon />
                        </Fab>

                    </Box>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default UserReservations