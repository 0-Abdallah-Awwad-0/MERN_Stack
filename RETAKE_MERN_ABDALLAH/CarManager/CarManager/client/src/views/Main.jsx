import { useEffect, useState } from "react";
import axios from "axios";
import CarList from "../components/CarList.jsx";

const Main = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (carId) => {
    setCars(cars.filter((car) => car._id !== carId));
  };

  return <CarList cars={cars} removeFromDom={removeFromDom} />;
};

export default Main;
