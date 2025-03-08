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
        <Box sx={{ width: '100%', mt: 0, borderRadius: 2, }}>
            <Grid container spacing={2} alignItems="stretch">

                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            From
                        </Typography>
                    </Box>
                    <Item >{searchParams.from}</Item>
                </Grid>


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


                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            To
                        </Typography>
                    </Box>
                    <Item>{searchParams.to}</Item>
                </Grid>


                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            Date
                        </Typography>
                    </Box>
                    <Item>{searchParams.date}</Item>
                </Grid>


                <Grid size={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
                            Person
                        </Typography>
                    </Box>
                    <Item>{searchParams.passengers} Yolcu</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FlightSummary;