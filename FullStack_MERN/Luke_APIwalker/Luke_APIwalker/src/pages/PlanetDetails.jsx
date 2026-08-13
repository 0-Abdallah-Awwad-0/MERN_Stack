import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CircularProgress, Paper, Typography } from '@mui/material'
import ErrorMessage from '../components/ErrorMessage.jsx'

const PlanetDetails = () => {
  const { id } = useParams()
  const [planet, setPlanet] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getPlanet = async () => {
      setLoading(true)
      setError(false)

      try {
        const res = await axios.get('https://swapi.dev/api/planets/' + id + '/')
        setPlanet(res.data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getPlanet()
  }, [id])

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <ErrorMessage />
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>{planet.name}</Typography>
      <Typography>Climate: {planet.climate}</Typography>
      <Typography>Terrain: {planet.terrain}</Typography>
      <Typography>Surface Water: {planet.surface_water}</Typography>
      <Typography>Population: {planet.population}</Typography>
      <Typography>Diameter: {planet.diameter}</Typography>
    </Paper>
  )
}

export default PlanetDetails
