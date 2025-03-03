import React from 'react';
import Grid from '@mui/material/Grid2'; // Grid2 kullanılıyor
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import flight2 from '../assets/Flight2.png';

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
    height: '70%', // Yüksekliği eşitlemek için
}));

const RightFlatItem = styled(Item)(({ theme }) => ({
    borderTopRightRadius: '0', // Sağ üst köşeyi düz yap
    borderBottomRightRadius: '0', // Sağ alt köşeyi düz yap
    borderRight: '0', // Sağ kenarlığı kaldır
}));

const LeftFlatItem = styled(Item)(({ theme }) => ({
    borderTopLeftRadius: '0', // Sol üst köşeyi düz yap
    borderBottomLeftRadius: '0', // Sol alt köşeyi düz yap
    borderLeft: '0', // Sol kenarlığı kaldır
}));

const AllFlatItem = styled(Item)(({ theme }) => ({
    borderRadius: '0', // Tüm köşeleri düz yap
    borderLeft: '0', // Sol kenarlığı kaldır
    borderRight: '0', // Sağ kenarlığı kaldır
}));

const FlightItem = ({ flight }) => {
    return (

        <Grid container spacing={1} alignItems="stretch" sx={{ display: 'flex', flexGrow: 1 }}>
            {/* Sol taraf (8 birim genişliğinde) */}
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

            {/* Sağ taraf (4 birim genişliğinde) */}
            <Grid container size={{ xs: 12, md: 5, lg: 4 }} spacing={0} alignItems="stretch" >
                <Grid size={{ xs: 6, lg: 6 }}>
                    <RightFlatItem>{flight.price}</RightFlatItem>
                </Grid>
                <Grid size={{ xs: 6, lg: 6 }}>
                    <LeftFlatItem>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Book
                        </Button>
                    </LeftFlatItem>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default FlightItem;