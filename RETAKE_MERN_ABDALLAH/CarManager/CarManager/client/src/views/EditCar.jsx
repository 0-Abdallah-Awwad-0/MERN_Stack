import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import CarForm from "../components/CarForm.jsx";

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cars/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const updateCar = (updatedCar, setErrors) => {
    axios
      .put(`http://localhost:8000/api/cars/${id}`, updatedCar)
      .then(() => navigate(`/cars/${id}`))
      .catch((err) => setErrors(err.response?.data?.errors || {}));
  };

  if (!car) return <div className="page">Loading...</div>;

  return (
    <div className="page narrow-page">
      <div className="header-row">
        <h1>Edit: {car.name}</h1>
        <Link to={`/cars/${id}`}>Details</Link>
      </div>
      <Paper className="form-paper">
        <CarForm
          initialCar={car}
          onSubmit={updateCar}
          submitText="Save Changes"
          onCancel={() => navigate(`/cars/${id}`)}
        />
      </Paper>
    </div>
  );
};

export default EditCar;
