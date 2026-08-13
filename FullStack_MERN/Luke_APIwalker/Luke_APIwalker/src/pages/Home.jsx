import React from 'react'
import { Paper, Typography } from '@mui/material'

const Home = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Star Wars Search
      </Typography>
      <Typography>
        Choose People or Planets, enter an ID, and click Search.
      </Typography>
    </Paper>
  )
}

export default Home
