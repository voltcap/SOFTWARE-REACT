import React from 'react'
import Grid from '@mui/material/Grid2';
import AdminEmployeesTable from './AdminEmployeesTable';

const AdminShowEmployee = () => {
    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
            sx={{
                justifyContent: "space-evenly",
                alignItems: "flex-start",
            }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="column"
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "stretch",
                }}>
                <AdminEmployeesTable />

            </Grid>

        </Grid>
    )
}

export default AdminShowEmployee