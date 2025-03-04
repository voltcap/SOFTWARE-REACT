import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Flightlistpage from './pages/Flightlistpage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <hr></hr>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/FlightList' element={<Flightlistpage />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/Seats' element={<ProfilePage />} />
          <Route path='/Checkout' element={<ProfilePage />} />

          <Route path='*' element={<NotFoundPage />} />

        </Routes>

      </div>



    </>
  )
}

export default App
