import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteButton from "./DeleteButton.jsx";

const CarList = ({ cars, removeFromDom }) => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="header-row">
        <h1>Cars</h1>
        <Button variant="contained" onClick={() => navigate("/cars/new")}>
          + Add Car
        </Button>
      </div>

      {cars.length === 0 ? (
        <Paper className="empty-box">
          <p>No cars yet</p>
          <Button variant="contained" onClick={() => navigate("/cars/new")}>
            Add Car
          </Button>
        </Paper>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car) => (
                <TableRow key={car._id}>
                  <TableCell>{car.name}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>
                    {car.price.toLocaleString()} {car.currency}
                  </TableCell>
                  <TableCell className="actions">
                    <Link to={`/cars/${car._id}`}>Details</Link>
                    <DeleteButton
                      carId={car._id}
                      successCallback={() => removeFromDom(car._id)}
                    >
                      Send to scrap
                    </DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default CarList;
