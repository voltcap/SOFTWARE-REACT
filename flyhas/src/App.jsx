import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Flightlistpage from './pages/Flightlistpage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import NotFoundPage from './pages/NotFoundPage'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/FlightList' element={<Flightlistpage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />

        </Routes>

      </div>



    </>
  )
}

export default App
