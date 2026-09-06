import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import DeleteButton from "../components/DeleteButton.jsx";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cars/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!car) return <div className="page">Loading...</div>;

  return (
    <div className="page narrow-page">
      <div className="header-row">
        <h1>{car.name}</h1>
        <Link to="/">Dashboard</Link>
      </div>

      <Paper className="details-card">
        <div className="detail-row">
          <span>Model</span>
          <strong>{car.model}</strong>
        </div>
        <div className="detail-row">
          <span>Price</span>
          <strong>
            {car.price.toLocaleString()} {car.currency}
          </strong>
        </div>
        <div className="detail-row">
          <span>Transmission</span>
          <strong>{car.transmission}</strong>
        </div>
        <div className="detail-row">
          <span>Phone Number</span>
          <strong>{car.phone}</strong>
        </div>

        <div className="form-actions left-actions">
          <Button variant="contained" onClick={() => navigate(`/cars/${id}/edit`)}>
            Edit Car
          </Button>
          <DeleteButton carId={id} successCallback={() => navigate("/")}>
            Delete
          </DeleteButton>
        </div>
      </Paper>
    </div>
  );
};

export default Details;
