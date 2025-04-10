import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const PersonalInformationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const selectedSeats = location.state?.selectedSeats || [];


  const [passengers, setPassengers] = useState(
    selectedSeats.map(() => ({
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      nationalId: "",
    }))
  );

  const handlePassengerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    navigate("/CheckOut", {
      state: {
        passengers,
        selectedSeats,
      },
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Passenger Information
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {passengers.map((passenger, index) => (
          <Paper key={index} elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Passenger {index + 1} – Seat: {selectedSeats[index]?.seatNumber}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={passenger.firstName}
                  onChange={(e) => handlePassengerChange(index, e)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={passenger.lastName}
                  onChange={(e) => handlePassengerChange(index, e)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={passenger.email}
                  onChange={(e) => handlePassengerChange(index, e)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Birth Date"
                  name="birthDate"
                  type="date"
                  value={passenger.birthDate}
                  onChange={(e) => handlePassengerChange(index, e)}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="National ID"
                  name="nationalId"
                  value={passenger.nationalId}
                  onChange={(e) => handlePassengerChange(index, e)}
                  required
                />
              </Grid>
            </Grid>
          </Paper>
        ))}

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button type="submit" variant="contained" size="large">
            Confirm & Proceed
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalInformationPage;