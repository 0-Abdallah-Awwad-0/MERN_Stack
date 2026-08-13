import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { CircularProgress, Paper, Typography } from '@mui/material'
import ErrorMessage from '../components/ErrorMessage.jsx'

const PersonDetails = () => {
  const { id } = useParams()
  const [person, setPerson] = useState({})
  const [homeworld, setHomeworld] = useState('')
  const [homeworldId, setHomeworldId] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getPerson = async () => {
      setLoading(true)
      setError(false)

      try {
        const res = await axios.get('https://swapi.dev/api/people/' + id + '/')
        setPerson(res.data)

        const homeworldRes = await axios.get(res.data.homeworld)
        setHomeworld(homeworldRes.data.name)

        const parts = res.data.homeworld.split('/')
        setHomeworldId(parts[parts.length - 2])
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getPerson()
  }, [id])

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <ErrorMessage />
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>{person.name}</Typography>
      <Typography>Height: {person.height}</Typography>
      <Typography>Mass: {person.mass}</Typography>
      <Typography>Hair Color: {person.hair_color}</Typography>
      <Typography>Skin Color: {person.skin_color}</Typography>
      <Typography>Birth Year: {person.birth_year}</Typography>
      <Typography sx={{ mt: 2 }}>
        Homeworld: <Link to={'/planets/' + homeworldId}>{homeworld}</Link>
      </Typography>
    </Paper>
  )
}

export default PersonDetails
