import { useState } from 'react'

import './App.css'
import Flightlistpage from './Pages/Flightlistpage'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

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
