import React from 'react';
import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const NotFoundPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'transparent',
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: 'White',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    width: { xs: '80%', sm: '60%', md: '50%' },
                }}
            >
                <ErrorIcon sx={{ fontSize: 80, color: '#ff3d00' }} />
                <Typography variant="h5" sx={{ marginTop: '16px' }}>
                    Page Not Found
                </Typography>
            </Box>
        </Box>
    );
};

export default NotFoundPage;