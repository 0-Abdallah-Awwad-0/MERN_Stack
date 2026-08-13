import { useEffect, useState } from 'react'
import { Container, Paper, Typography } from '@mui/material'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description: description,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    )
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 3 }}>
          Todo List
        </Typography>

        <TodoForm addTask={addTask} />

        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </Paper>
    </Container>
  )
}

export default App
