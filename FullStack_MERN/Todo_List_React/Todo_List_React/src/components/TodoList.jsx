import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'

const TodoList = (props) => {
  if (props.tasks.length === 0) {
    return (
      <Typography align="center">
        No tasks yet.
      </Typography>
    )
  }

  return (
    <List>
      {props.tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <Button
              color="error"
              onClick={() => props.deleteTask(task.id)}
            >
              Delete
            </Button>
          }
        >
          <Checkbox
            checked={task.completed}
            onChange={() => props.toggleTask(task.id)}
          />

          <ListItemText
            primary={task.description}
            sx={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default TodoList
