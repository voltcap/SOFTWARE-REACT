import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CommentIcon from '@mui/icons-material/Comment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookingError from '../assets/BookingError.png';

const ManagerSupport = () => {
    const [statusFilter, setStatusFilter] = useState('all');
    
    const supportTickets = [
        {
            id: 1,
            title: "Unable to make reservation",
            user: "Taner Arslan",
            role: "Signed User",
            description: "I was trying to make reservation for Ankara Istanbul flight but web site give me error with 345 code. Could you help me?",
            status: "pending",
            date: "2023-05-15"
        },
        {
            id: 2,
            title: "Payment issue",
            user: "Ayşe Kaya",
            role: "Guest User",
            description: "My payment was declined but money was taken from my account. Please help!",
            status: "in-progress",
            date: "2023-05-14"
        }
    ];

    const filteredTickets = statusFilter === 'all' 
        ? supportTickets 
        : supportTickets.filter(ticket => ticket.status === statusFilter);

    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="column"
            sx={{
                justifyContent: "flex-start",
                alignItems: "stretch",
            }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2
                }}>
                <Grid>
                    <Typography variant="h6">Support Tickets Management</Typography>
                </Grid>
                <Grid>
                    <Fab size="small" variant="extended" color="primary" aria-label="filter">
                        <FilterListIcon sx={{ mr: 1 }} />
                        Filter
                    </Fab>
                </Grid>
            </Grid>

            {filteredTickets.map(ticket => (
                <Grid key={ticket.id} size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <Card sx={{ display: 'flex', mb: 2 }}>
                        <CardMedia
                            component="img"
                            alt="SupportProfile"
                            image={BookingError}
                            sx={{
                                width: { xs: "14%", sm: "14%", md: "14%", lg: "14%" },
                                height: "auto",
                                aspectRatio: "1 / 1",
                                objectFit: "fill",
                            }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left" }}>
                                    {ticket.title}
                                </Typography>
                                <Typography gutterBottom variant="h9" component="div" sx={{ textAlign: "left" }}>
                                    {ticket.user} / Role: {ticket.role} / Status: {ticket.status}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "left" }}>
                                    {ticket.description}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', textAlign: 'left', mt: 1 }}>
                                    Created: {ticket.date}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                    <Fab size="small" color="success" aria-label="resolve">
                                        <CheckIcon />
                                    </Fab>
                                    <Fab size="small" color="error" aria-label="reject">
                                        <CloseIcon />
                                    </Fab>
                                    <Fab size="small" variant="extended">
                                        <CommentIcon sx={{ mr: 1 }} />
                                        Add Note
                                    </Fab>
                                    <Fab size="small" variant="extended">
                                        <SupportAgentIcon sx={{ mr: 1 }} />
                                        Assign to Agent
                                    </Fab>
                                </Box>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default ManagerSupport;
