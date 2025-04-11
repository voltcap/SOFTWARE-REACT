import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ProfileWom from '../assets/ProfileWom.jpeg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const ItemInside = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
        boxShadow: 'none',
        border: 'none',
    }),
}));

const ManagerInfo = () => {
    const [extraFields, setExtraFields] = useState(false);
    const [isEditable, setIsEditable] = useState(false);

    const handleToggleFields = () => {
        setExtraFields(prev => !prev);
    };
    
    const handleToggleEdit = () => {
        setIsEditable(prev => !prev);
    };

    const [Profile] = useState({
        name: "Mai",
        surname: "Bakr",
        birth: "04/04/1982",
        gender: "Female",
        identityno: "99765433321",
        phonenumber: "+90 532 456 78 89",
        mail: "manager@flyhas.com",
        managerId: "MGR-1001",
        branch: "Heathrow Airport",
        responsibilityArea: "Flight Operations"
    });

    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
            sx={{
                justifyContent: "space-evenly",
                alignItems: "flex-start",
            }}>
            <Grid size={{ xs: 12, sm: 9, md: 3, lg: 3 }}>
                <ItemInside elevation={0}>
                    <Box component="img" alt="Manager Profile" src={ProfileWom} sx={{
                        width: { xs: "40%", sm: "30%", md: "100%", lg: "100%" },
                        height: "auto",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                    }} />
                </ItemInside>
            </Grid>
            <Grid container size={{ xs: 4, sm: 9, md: 9, lg: 9 }} direction="column"
                sx={{
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                }}>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <ItemInside elevation={0} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                        <TextField
                            id="outlined-read-only-input"
                            label="Name"
                            defaultValue={Profile.name}
                            slotProps={{
                                input: {
                                    readOnly: !isEditable,
                                },
                            }}
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Surname"
                            defaultValue={Profile.surname}
                            slotProps={{
                                input: {
                                    readOnly: !isEditable,
                                },
                            }}
                        />
                    </ItemInside>
                </Grid>
                <Divider></Divider>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <ItemInside elevation={0} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                        <TextField
                            id="outlined-read-only-input"
                            label="BirthDate"
                            defaultValue={Profile.birth}
                            slotProps={{
                                input: {
                                    readOnly: !isEditable,
                                },
                            }}
                        />
                    </ItemInside>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <ItemInside elevation={0} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                        <TextField
                            id="outlined-read-only-input"
                            label="Gender"
                            defaultValue={Profile.gender}
                            slotProps={{
                                input: {
                                    readOnly: !isEditable,
                                },
                            }}
                        />
                    </ItemInside>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <ItemInside elevation={0} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                        <TextField
                            id="outlined-read-only-input"
                            label="ID Number"
                            defaultValue={Profile.identityno}
                            slotProps={{
                                input: {
                                    readOnly: !isEditable,
                                },
                            }}
                        />
                    </ItemInside>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <ItemInside elevation={0} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                        <TextField
                            id="outlined-read-only-input"
                            label="Manager ID"
                            defaultValue={Profile.managerId}
                            slotProps={{
                                input: {
                                    readOnly: true, 
                                },
                            }}
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Branch"
                            defaultValue={Profile.branch}
                            slotProps={{
                                input: {
                                    readOnly: !isEditable,
                                },
                            }}
                        />
                    </ItemInside>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <ItemInside elevation={0} sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 2 }}>
                        <TextField
                            id="outlined-read-only-input"
                            label="Responsibility Area"
                            defaultValue={Profile.responsibilityArea}
                            slotProps={{
                                input: {
                                    readOnly: !isEditable,
                                },
                            }}
                            fullWidth
                        />
                    </ItemInside>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    <ItemInside elevation={0}>
                        <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
                            <Button onClick={handleToggleEdit}>{isEditable ? 'Save' : 'Edit Personal Information'}</Button>
                            <Button onClick={handleToggleFields}>{extraFields ? 'Save' : 'Change Password'}</Button>
                        </ButtonGroup>
                    </ItemInside>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ManagerInfo;
