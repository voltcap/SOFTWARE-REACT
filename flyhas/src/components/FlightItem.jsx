import React from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import flight2 from '../assets/Flight2.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Şeffaflık azaltıldı
    backdropFilter: 'blur(8px)', // Blur efekti eklendi
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
}));

const RightFlatItem = styled(Item)(({ theme }) => ({
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    borderRight: '0',
}));

const LeftFlatItem = styled(Item)(({ theme }) => ({
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    borderLeft: '0',
}));

const AllFlatItem = styled(Item)(({ theme }) => ({
    borderRadius: '0',
    borderLeft: '0',
    borderRight: '0',
}));

const FlightItem = ({ flight }) => {
    const navigate = useNavigate();
    return (

        <Grid container spacing={1} alignItems="stretch" sx={{ display: 'flex', flexGrow: 1 }}>

            <Grid container size={{ xs: 12, md: 5, lg: 8 }} spacing={0} alignItems="stretch" >
                <Grid size={{ xs: 6, lg: 2 }}>
                    <RightFlatItem elevation={0} >{flight.departure}</RightFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 2 }}>
                    <AllFlatItem elevation={0}>{flight.from}</AllFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 3 }}>
                    <AllFlatItem elevation={0}><Box
                        component="img"
                        src={flight2}
                        alt="Flight Icon"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    /></AllFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 2 }}>
                    <AllFlatItem elevation={0}>{flight.to}</AllFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 2 }}>
                    <LeftFlatItem elevation={0}>{flight.landing}</LeftFlatItem>
                </Grid>
            </Grid>


            <Grid container size={{ xs: 12, md: 5, lg: 4 }} spacing={0} alignItems="stretch" >
                <Grid size={{ xs: 6, lg: 6 }}>
                    <RightFlatItem elevation={0}>{flight.price}</RightFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 6 }}>
                    <LeftFlatItem elevation={0}>
                        <Button variant="contained" endIcon={<AirplaneTicketIcon />} onClick={() => navigate("/Seats")}>

                            Book

                        </Button>
                    </LeftFlatItem>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default FlightItem;