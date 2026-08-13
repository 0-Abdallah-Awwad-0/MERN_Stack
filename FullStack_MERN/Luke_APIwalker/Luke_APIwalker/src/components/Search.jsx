import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, MenuItem, Paper, TextField } from '@mui/material'

const Search = () => {
  const [resource, setResource] = useState('people')
  const [id, setId] = useState('')
  const navigate = useNavigate()

  const searchHandler = (e) => {
    e.preventDefault()

    if (id) {
      navigate('/' + resource + '/' + id)
    }
  }

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Box component="form" onSubmit={searchHandler} sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <TextField
          select
          label="Search for"
          value={resource}
          onChange={(e) => setResource(e.target.value)}
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="people">People</MenuItem>
          <MenuItem value="planets">Planets</MenuItem>
        </TextField>

        <TextField
          label="ID"
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          inputProps={{ min: 1 }}
        />

        <Button type="submit" variant="contained">
          Search
        </Button>
      </Box>
    </Paper>
  )
}

export default Search
