import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { useNavigate } from "react-router-dom";

const FlightItem = ({ flight }) => {
    const navigate = useNavigate();

    if (!flight) return null;

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                mb: 2,
                borderRadius: 3,
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" fontWeight="bold">
                        {flight.origin} → {flight.destination}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Typography variant="body1">
                        🛫 Departure:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {new Date(flight.departureTime).toLocaleString()}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Typography variant="body1">
                        🛬 Arrival:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {new Date(flight.arrivalTime).toLocaleString()}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="body1">
                        Seats: {flight.seats.length}
                    </Typography>
                    <Typography variant="body1" color={flight.fullyBooked ? "error" : "green"}>
                        {flight.fullyBooked ? "Fully Booked" : "Available"}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={flight.fullyBooked}
                        endIcon={<AirplaneTicketIcon />}
                        onClick={() => navigate(`/Seats/${flight.id}`)}
                        fullWidth
                    >

                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FlightItem;
