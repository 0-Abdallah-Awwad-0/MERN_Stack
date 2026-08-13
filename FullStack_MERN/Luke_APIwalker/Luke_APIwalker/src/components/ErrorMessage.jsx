import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

const ErrorMessage = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        These aren't the droids you're looking for
      </Typography>
      <Box
        component="img"
        src="https://lumiere-a.akamaihd.net/v1/images/628cdaa1dbbde50001de0bd3-image_6c311046.jpeg?region=336%2C0%2C864%2C864"
        alt="Obi-Wan Kenobi"
        sx={{ width: '100%', maxWidth: 320, borderRadius: 2 }}
      />
    </Paper>
  )
}

export default ErrorMessage
