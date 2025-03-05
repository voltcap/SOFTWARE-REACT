import { useState } from 'react'
import React from 'react'
import './App.css'
import Box from '@mui/material/Box';
import backgroundImage from './assets/Background.png';

import { Routes, Route } from 'react-router-dom'

import Flightlistpage from './pages/Flightlistpage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import SeatSelectionPage from './pages/SeatSelectionPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage'
import PersonalInformationPage from './pages/PersonalInformationPage'
import AdminPage from './pages/AdminPage'



function App() {

  return (
    <>
      <div>
        <Navbar />
        <Box sx={{
          justifyContent: "space-evenly",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          alignItems: { md: "flex-start" },
          p: 2, gap: 2,
        }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/FlightList' element={<Flightlistpage />} />
            <Route path='/Profile' element={<ProfilePage />} />
            <Route path='/Seats' element={<SeatSelectionPage />} />
            <Route path='/Checkout' element={<CheckoutPage />} />
            <Route path='/Register' element={<RegisterPage />} />
            <Route path='/PersonalInfo' element={<PersonalInformationPage />} />
            <Route path='/AdminProfile' element={<AdminPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Box>



      </div>



    </>
  )
}

export default App
