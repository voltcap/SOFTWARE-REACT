import React from 'react'
import { useState } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Accordioneditor from "../components/Accordioneditor";
import backgroundImage from '../assets/Antalya.jpg';
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
                backgroundSize: "cover", // Resmi otomatik ölçeklendirir
                backgroundPosition: "center", // Ortalar
                backgroundRepeat: "no-repeat", // Tekrarlanmasını engeller
                p: 3,
                borderRadius: 2,
                mb: 4
            }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={12}>
                        <Box bgcolor="white" p={2} borderRadius={2} boxShadow={2} sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(10px)" }}>
                            <FlightSummary searchParams={searchParams} />
                        </Box>
                    </Grid>
                    <Divider sx={{ width: '100%' }} /> {/* Satır ayracı */}
                    <Grid size={12}>
                        <div p={2} borderRadius={2} boxShadow={2}>
                            <Accordioneditor />
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="md" sx={{

                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover", // Resmi otomatik ölçeklendirir
                backgroundPosition: "center", // Ortalar
                backgroundRepeat: "no-repeat", // Tekrarlanmasını engeller
                p: 3,
                borderRadius: 2,
                mb: 4
            }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid size={12}>
                        <Box bgcolor="white" p={2} borderRadius={2} boxShadow={2} sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(10px)" }}>
                            <FlightList flights={flights} />
                        </Box>
                    </Grid>
                    <Divider sx={{ width: '100%' }} /> {/* Satır ayracı */}
                </Grid>
            </Container>
        </>
    )
}

export default Flightlistpage