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
    return (

        <Grid container spacing={1} alignItems="stretch" sx={{ display: 'flex', flexGrow: 1 }}>

            <Grid container size={{ xs: 12, md: 5, lg: 8 }} spacing={0} alignItems="stretch" >
                <Grid size={{ xs: 6, lg: 2 }}>
                    <RightFlatItem>{flight.departure}</RightFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 2 }}>
                    <AllFlatItem >{flight.from}</AllFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 3 }}>
                    <AllFlatItem ><Box
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
                    <AllFlatItem >{flight.to}</AllFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 2 }}>
                    <LeftFlatItem>{flight.landing}</LeftFlatItem>
                </Grid>
            </Grid>


            <Grid container size={{ xs: 12, md: 5, lg: 4 }} spacing={0} alignItems="stretch" >
                <Grid size={{ xs: 6, lg: 6 }}>
                    <RightFlatItem>{flight.price}</RightFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 6 }}>
                    <LeftFlatItem>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            <Link className="link" to="/Seats">
                                Book
                            </Link>
                        </Button>
                    </LeftFlatItem>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default FlightItem;