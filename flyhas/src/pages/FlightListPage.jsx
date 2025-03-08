import React from 'react'
import { useState } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Accordioneditor from "../components/Accordioneditor";
import backgroundImage from '../assets/Morocco.jpg';
import FlightSummary from '../components/FlightSummary';
import FlightList from '../components/FlightList';


const Flightlistpage = () => {

    const [searchParams, setSearchParams] = useState({
        from: "İstanbul",
        to: "Ankara",
        date: "2025-03-15",
        passengers: 1
    });


    const flights = [
        { id: 1, from: "İstanbul", to: "Ankara", departure: "08:50", landing: "10:00", price: "1500₺" },
        { id: 2, from: "İstanbul", to: "Ankara", departure: "11:30", landing: "13:30", price: "1300₺" },
        { id: 3, from: "İstanbul", to: "Ankara", departure: "16:20", landing: "18:00", price: "1400₺" }
    ];



    return (
        <>
            <Container maxWidth="md" sx={{

                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                p: 3,
                borderRadius: 2,
                mb: 4
            }}>
                <Grid container size={12} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={12}>
                        <Box bgcolor="white" p={2} borderRadius={2} boxShadow={2} sx={{
                            backgroundColor: "rgb(255, 255, 255)", borderRadius: 4,
                            borderColor: "gray",
                            padding: 3,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}>
                            <FlightSummary searchParams={searchParams} />
                        </Box>
                    </Grid>
                    <Divider sx={{ width: '100%' }} />
                    <Grid size={12}>
                        <div p={2} borderRadius={2} boxShadow={2}>
                            <Accordioneditor />
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="md" sx={{

                borderRadius: 2,
                mb: 4
            }}>
                <Grid container size={12} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Divider sx={{ width: '100%' }} />
                    <Grid size={12}>
                        <Box bgcolor="white" p={2} borderRadius={2} sx={{
                            backgroundColor: "rgb(255, 255, 255)", borderRadius: 4,
                            borderColor: "gray",
                            padding: 3,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}>
                            <FlightList flights={flights} />
                        </Box>
                    </Grid>
                    <Divider sx={{ width: '100%' }} />
                </Grid>
            </Container>
        </>
    )
}

export default Flightlistpage