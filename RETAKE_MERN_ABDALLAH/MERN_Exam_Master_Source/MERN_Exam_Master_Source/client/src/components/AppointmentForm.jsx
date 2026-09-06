import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

const AppointmentForm = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  cancel,
  submitText,
}) => {
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
        error={Boolean(errors.title)}
        helperText={errors.title?.message}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth error={Boolean(errors.category)} sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
        >
          <MenuItem value="Meeting">Meeting</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
          <MenuItem value="Study">Study</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        <FormHelperText>{errors.category?.message}</FormHelperText>
      </FormControl>

      <FormControl error={Boolean(errors.priority)} sx={{ mb: 2 }}>
        <FormLabel>Priority</FormLabel>
        <RadioGroup
          row
          name="priority"
          value={values.priority}
          onChange={handleChange}
        >
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
          <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="High" control={<Radio />} label="High" />
        </RadioGroup>
        <FormHelperText>{errors.priority?.message}</FormHelperText>
      </FormControl>

      <TextField
        fullWidth
        type="date"
        label="Date"
        name="date"
        value={values.date}
        onChange={handleChange}
        error={Boolean(errors.date)}
        helperText={errors.date?.message}
        slotProps={{ inputLabel: { shrink: true } }}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        type="time"
        label="Time"
        name="time"
        value={values.time}
        onChange={handleChange}
        error={Boolean(errors.time)}
        helperText={errors.time?.message}
        slotProps={{ inputLabel: { shrink: true } }}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Details"
        name="details"
        value={values.details}
        onChange={handleChange}
        error={Boolean(errors.details)}
        helperText={errors.details?.message}
        sx={{ mb: 2 }}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="completed"
            checked={values.completed}
            onChange={handleChange}
          />
        }
        label="Completed"
        sx={{ mb: 2 }}
      />

      <Box>
        <Button type="submit" variant="contained" sx={{ mr: 2 }}>
          {submitText}
        </Button>
        <Button type="button" variant="outlined" onClick={cancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AppointmentForm;
