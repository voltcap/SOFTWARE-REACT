import React, { useState, useEffect } from "react";
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
        date: "2025-04-25",
        passengers: 1
    });

    const [flights, setFlights] = useState([]);


    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/flights/search", {
                    params: {
                        origin: searchParams.from,
                        destination: searchParams.to,
                        date: searchParams.date
                    }
                });
                setFlights(response.data);
            } catch (error) {
                console.error("Uçuşlar alınırken hata oluştu:", error);
            }
        };

        fetchFlights();
    }, [searchParams]);

    return (
        <>
            <Container maxWidth="md"
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    p: 3,
                    borderRadius: 2,
                    mb: 4
                }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box bgcolor="white" p={2} borderRadius={2} boxShadow={2}>
                            <FlightSummary searchParams={searchParams} />
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordioneditor onSearch={(values) => setSearchParams(values)} />
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="md" sx={{ borderRadius: 2, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box bgcolor="white" p={2} borderRadius={2} boxShadow={2}>
                            <FlightList flights={flights} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default FlightListPage;
