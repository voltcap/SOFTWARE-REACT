import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import axios from "axios";
import ProfileWom from "../assets/ProfileWom.jpeg";
import { Avatar } from "@mui/material";

const getInitials = (firstName, lastName) => {
    const f = firstName?.charAt(0)?.toUpperCase() || "";
    const l = lastName?.charAt(0)?.toUpperCase() || "";
    return `${f}${l}`;
};

const ItemInside = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    border: "none",
}));

const AdminInfo = () => {
    const [extraFields, setExtraFields] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
        department: "",
        nationalId: "",
        employeeNumber: "",
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: ""
    });

    useEffect(() => {
        const fetchAdminData = async () => {
            const token = localStorage.getItem("userToken");
            try {
                const response = await axios.get("http://localhost:8080/api/profile/admin", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setFormData(response.data);
            } catch (err) {
                console.error("Profil bilgisi alınamadı:", err);
            }
        };

        fetchAdminData();
    }, []);

    const handleToggleEdit = () => {
        if (isEditable) {
            handleSave();
        }
        setIsEditable(!isEditable);
    };

    const handleSave = async () => {
        const token = localStorage.getItem("userToken");
        try {
            await axios.put("http://localhost:8080/api/profile/admin", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Profil başarıyla güncellendi!");
        } catch (err) {
            console.error("Güncelleme hatası:", err);
            alert("Profil güncellenemedi.");
        }
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordUpdate = async () => {
        const token = localStorage.getItem("userToken");
        try {
            await axios.put("http://localhost:8080/api/profile/admin/password", passwordData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Şifre başarıyla güncellendi!");
            setPasswordData({ currentPassword: "", newPassword: "" });
            setExtraFields(false);
        } catch (err) {
            console.error("Şifre güncelleme hatası:", err);
            alert("Şifre güncellenemedi.");
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Grid container spacing={2} sx={{ justifyContent: "center", padding: 2 }}>
            <Grid
                item
                xs={12}
                md={3}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    minHeight: 300,
                    maxWidth: "28%",
                }}
            >
                <ItemInside sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
                    <Avatar
                        sx={{
                            width: 220,
                            height: 220,
                            bgcolor: "rgba(200, 200, 200, 0.3)",
                            color: "#000",
                            fontSize: "3rem",
                            fontWeight: 600,
                        }}
                    >
                        {getInitials(formData.firstName, formData.lastName)}
                    </Avatar>
                </ItemInside>
            </Grid>

            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            InputProps={{ readOnly: !isEditable }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            InputProps={{ readOnly: !isEditable }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Birth Date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            InputProps={{ readOnly: !isEditable }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Employee Number"
                            name="employeeNumber"
                            value={formData.employeeNumber}
                            onChange={handleChange}
                            InputProps={{ readOnly: !isEditable }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            InputProps={{ readOnly: !isEditable }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="National ID"
                            name="nationalId"
                            value={formData.nationalId}
                            onChange={handleChange}
                            InputProps={{ readOnly: !isEditable }}
                        />
                    </Grid>

                    {extraFields && (
                        <>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Current Password"
                                    name="currentPassword"
                                    type="password"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="New Password"
                                    name="newPassword"
                                    type="password"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={handlePasswordUpdate}>
                                    Save New Password
                                </Button>
                            </Grid>
                        </>
                    )}

                    <Grid item xs={12}>
                        <ButtonGroup fullWidth>
                            <Button onClick={handleToggleEdit}>
                                {isEditable ? "Save Changes" : "Edit Profile"}
                            </Button>
                            <Button onClick={() => setExtraFields(!extraFields)}>
                                {extraFields ? "Hide Password Change" : "Change Password"}
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdminInfo;