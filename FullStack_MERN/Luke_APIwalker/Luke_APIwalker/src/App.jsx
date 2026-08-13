import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import Search from './components/Search.jsx'
import Home from './pages/Home.jsx'
import PersonDetails from './pages/PersonDetails.jsx'
import PlanetDetails from './pages/PlanetDetails.jsx'

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Luke APIwalker
      </Typography>

      <Search />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<PersonDetails />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
      </Routes>
    </Container>
  )
}

export default App
