
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ManagerService from "../services/ManagerService";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const AdminManagersTable = ({ refreshTrigger }) => {
    const [managers, setManagers] = useState([]);

    const fetchManagers = async () => {
        try {
            const response = await ManagerService.getAllManagers();
            const formatted = response.data.map((manager) => ({
                id: manager.id,
                firstName: manager.firstName,
                lastName: manager.lastName,
                email: manager.email,
                birthDate: manager.birthDate,
                employeeNumber: manager.employeeNumber,
            }));
            setManagers(formatted);
        } catch (err) {
            console.error("Yöneticiler alınamadı:", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ManagerService.deleteManager(id);
            fetchManagers();
        } catch (err) {
            console.error("Silme hatası:", err);
        }
    };

    useEffect(() => {
        fetchManagers();
    }, [refreshTrigger]);

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First Name", width: 130 },
        { field: "lastName", headerName: "Last Name", width: 130 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "birthDate", headerName: "Birth Date", width: 120 },
        { field: "employeeNumber", headerName: "Employee No", width: 140 },
        {
            field: "actions",
            headerName: "Actions",
            width: 130,
            renderCell: (params) => (
                <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <Grid container direction="column" sx={{ justifyContent: "center", alignItems: "stretch", padding: 2 }}>
            <Paper elevation={3} sx={{ height: 450, width: "100%" }}>
                <DataGrid
                    rows={managers}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </Grid>
    );
};

export default AdminManagersTable;