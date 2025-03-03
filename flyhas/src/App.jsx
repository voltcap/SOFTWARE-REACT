import { useState } from 'react'

import './App.css'
import Flightlistpage from './pages/Flightlistpage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Flightlistpage />



    </>
  )
}

export default App
