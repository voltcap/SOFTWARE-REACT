import React from 'react'
import FlightItem from './FlightItem'
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';

const FlightList = ({ flights }) => {
    console.log("Flight listesi:", flights);
    return (
        <Grid container spacing={2} elevation={0} sx={{ backgroundColor: "rgba(255, 255, 255, 0)", }}>
            {flights.map((flight) => (

                <Grid size={{ xs: 12, md: 5, lg: 12 }} key={flight.id}>
                    <FlightItem flight={flight} />

                </Grid>

            ))}
        </Grid>
    )
}



export default FlightList