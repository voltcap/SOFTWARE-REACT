import React, { useState, useEffect } from "react";
import {
    Grid, Paper, TextField, ButtonGroup, Button, Avatar
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

const ItemInside = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    border: "none",
}));


const getInitials = (firstName, lastName) => {
    const f = firstName?.charAt(0)?.toUpperCase() || "";
    const l = lastName?.charAt(0)?.toUpperCase() || "";
    return `${f}${l}`;
};

const UserInfo = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [extraFields, setExtraFields] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        nationalId: "",
        email: ""
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: ""
    });

    const token = localStorage.getItem("userToken");

    useEffect(() => {
        axios.get("http://localhost:8080/api/profile/customer", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => setFormData(res.data))
            .catch((err) => console.error("Profil alınamadı:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggleEdit = () => {
        if (isEditable) handleSave();
        setIsEditable(!isEditable);
    };

    const handleSave = async () => {
        try {
            await axios.put("http://localhost:8080/api/profile/customer", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Profil güncellendi.");
        } catch (err) {
            console.error("Güncelleme hatası:", err);
            alert("Profil güncellenemedi.");
        }
    };

    const handlePasswordUpdate = async () => {
        try {
            await axios.put("http://localhost:8080/api/profile/customer/password", passwordData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Şifre değiştirildi.");
            setExtraFields(false);
            setPasswordData({ currentPassword: "", newPassword: "" });
        } catch (err) {
            console.error("Şifre değiştirilemedi:", err);
            alert("Hatalı mevcut şifre.");
        }
    };

    return (
        <Grid container spacing={2} sx={{ justifyContent: "center", padding: 2 }}>
            {/* Avatar */}
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
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Birth Date"
                            name="birthDate"
                            type="date"
                            value={formData.birthDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
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

export default UserInfo;