import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const AdminEmployeesTable = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'idNumber',
            headerName: 'Employee ID Number',
            description: 'This column shows the Employee ID number. It is not sortable.',
            sortable: false,
            width: 160,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Johnson', firstName: 'Eric', age: 28, idNumber: '1234567890' },
        { id: 2, lastName: 'Payne', firstName: 'Liam', age: 34, idNumber: '2345678901' },
        { id: 3, lastName: 'Brown', firstName: 'Carl', age: 27, idNumber: '3456789012' },
        { id: 4, lastName: 'Cyrus', firstName: 'Noah', age: 40, idNumber: '4567890123' },
        { id: 5, lastName: 'Swift', firstName: 'Ava', age: 31, idNumber: '5678901234' },
        { id: 6, lastName: 'Miller', firstName: 'Sophia', age: 29, idNumber: '6789012345' },
        { id: 7, lastName: 'Wilson', firstName: 'James', age: 37, idNumber: '7890123456' },
        { id: 8, lastName: 'Moore', firstName: 'Isabella', age: 26, idNumber: '8901234567' },
        { id: 9, lastName: 'Taylor', firstName: 'Benjamin', age: 45, idNumber: '9012345678' },
    ];

    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Grid container size={{ xs: 4, sm: 8, md: 12 }} direction="column"
            sx={{
                justifyContent: "space-evenly",
                alignItems: "stretch",
            }}>
            <Paper elevation={0} sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </Grid>
    )
}

export default AdminEmployeesTable;