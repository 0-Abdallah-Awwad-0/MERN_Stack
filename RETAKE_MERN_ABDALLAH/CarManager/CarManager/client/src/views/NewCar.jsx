import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import CarForm from "../components/CarForm.jsx";

const NewCar = () => {
  const navigate = useNavigate();

  const createCar = (car, setErrors) => {
    axios
      .post("http://localhost:8000/api/cars", car)
      .then(() => navigate("/"))
      .catch((err) => setErrors(err.response?.data?.errors || {}));
  };

  return (
    <div className="page narrow-page">
      <div className="header-row">
        <h1>Add a Car</h1>
        <Link to="/">Dashboard</Link>
      </div>
      <Paper className="form-paper">
        <CarForm
          initialCar={{
            name: "",
            model: "",
            price: "",
            currency: "USD",
            phone: "",
            transmission: "",
          }}
          onSubmit={createCar}
          submitText="Create Car"
          onCancel={() => navigate("/")}
        />
      </Paper>
    </div>
  );
};

export default NewCar;
