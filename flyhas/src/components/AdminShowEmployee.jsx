import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AdminEmployeesTable from './AdminEmployeesTable';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const AdminShowEmployee = () => {
    const [open, setOpen] = useState(false);
    const [refreshTable, setRefreshTable] = useState(false);
    const [formData, setFormData] = useState({
        employeeNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const today = new Date();
        const birthDate = new Date(formData.birthDate);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (birthDate > today) {
            alert("Birth date cannot be in the future.");
            return;
        }

        if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
            alert("Manager must be at least 18 years old.");
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/auth/register/manager', formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            alert('Manager successfully added!');
            setOpen(false);
            setRefreshTable((prev) => !prev);
        } catch (err) {
            console.error("Kayıt hatası:", err);
            alert("Manager eklenemedi.");
        }
    };

    return (
        <Grid container spacing={2} direction="column" sx={{ justifyContent: "space-evenly", alignItems: "stretch", padding: 2 }}>
            <Button variant="contained" onClick={() => setOpen(true)}>Add Manager</Button>

            <AdminEmployeesTable refreshTrigger={refreshTable} />

            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Register New Manager</DialogTitle>
                <DialogContent>
                    <TextField fullWidth margin="dense" label="Employee Number" name="employeeNumber" value={formData.employeeNumber} onChange={handleChange} />
                    <TextField fullWidth margin="dense" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <TextField fullWidth margin="dense" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <TextField fullWidth margin="dense" label="Email" name="email" value={formData.email} onChange={handleChange} />
                    <TextField fullWidth margin="dense" type="password" label="Password" name="password" value={formData.password} onChange={handleChange} />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Birth Date"
                        name="birthDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained">Submit</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default AdminShowEmployee;