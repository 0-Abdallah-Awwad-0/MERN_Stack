import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

const TodoForm = (props) => {
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim() === '') {
      return
    }

    props.addTask(description)
    setDescription('')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, mb: 3 }}>
      <TextField
        label="Task"
        variant="filled"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  )
}

export default TodoForm
