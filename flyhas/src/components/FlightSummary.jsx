import React from 'react';
import Flightvector from '../assets/Flightvector.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const FlightSummary = ({ searchParams }) => {
    return (
        <Box sx={{ width: '100%', mt: 0 }}>
            <Grid container spacing={2} alignItems="stretch">
                {/* İlk kutunun üstüne "Nereden" yazısı */}
                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            Nereden
                        </Typography>
                    </Box>
                    <Item sx={{ border: 1, borderBlockColor: 'black', borderRightColor: 'black', borderLeftColor: 'black' }}>{searchParams.from}</Item>
                </Grid>

                {/* Resim olan kutucuk, üstüne bir şey yazılmıyor */}
                <Grid size={4}>
                    <Item elevation={0} sx={{ backgroundColor: 'transparent', p: 0 }}>
                        <Box
                            component="img"
                            src={Flightvector}
                            alt="Flight Icon"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Item>
                </Grid>

                {/* 3. kutunun üstüne "Nereye" yazısı */}
                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            Nereye
                        </Typography>
                    </Box>
                    <Item>{searchParams.to}</Item>
                </Grid>

                {/* 4. kutunun üstüne "Tarih" yazısı */}
                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            Tarih
                        </Typography>
                    </Box>
                    <Item>{searchParams.date}</Item>
                </Grid>

                {/* 5. kutunun üstüne "Yolcu" yazısı */}
                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            Yolcu
                        </Typography>
                    </Box>
                    <Item>{searchParams.passengers} Yolcu</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FlightSummary;