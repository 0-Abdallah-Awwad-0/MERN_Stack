import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CarForm = ({ initialCar, onSubmit, submitText, onCancel }) => {
  const [name, setName] = useState(initialCar.name);
  const [model, setModel] = useState(initialCar.model);
  const [price, setPrice] = useState(initialCar.price);
  const [currency, setCurrency] = useState(initialCar.currency);
  const [phone, setPhone] = useState(initialCar.phone);
  const [transmission, setTransmission] = useState(initialCar.transmission);
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(
      { name, model, price, currency, phone, transmission },
      setErrors
    );
  };

  return (
    <form className="car-form" onSubmit={submitHandler}>
      <div className="two-column">
        <TextField
          label="Car name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />

        <TextField
          label="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          error={Boolean(errors.model)}
          helperText={errors.model?.message}
        />

        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          error={Boolean(errors.price)}
          helperText={errors.price?.message}
        />

        <div>
          <Select
            fullWidth
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="NIS">NIS</MenuItem>
          </Select>
          {errors.currency && <p className="error">{errors.currency.message}</p>}
        </div>
      </div>

      <TextField
        fullWidth
        label="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={Boolean(errors.phone)}
        helperText={errors.phone?.message}
      />

      <div>
        <p>Transmission</p>
        <RadioGroup
          row
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <FormControlLabel value="Manual" control={<Radio />} label="Manual" />
          <FormControlLabel
            value="Automatic"
            control={<Radio />}
            label="Automatic"
          />
        </RadioGroup>
        {errors.transmission && (
          <p className="error">{errors.transmission.message}</p>
        )}
      </div>

      <div className="form-actions">
        <Button variant="outlined" color="error" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          {submitText}
        </Button>
      </div>
    </form>
  );
};

export default CarForm;
