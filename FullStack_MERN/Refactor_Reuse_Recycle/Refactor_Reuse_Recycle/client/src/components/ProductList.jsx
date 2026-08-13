import { Link } from "react-router-dom";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteButton from "./DeleteButton.jsx";

function ProductList({ products, removeFromDom }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" mb={2}>All Products</Typography>
      <List>
        {products.map((product) => (
          <ListItem
            key={product._id}
            divider
            secondaryAction={
              <Box>
                <Button component={Link} to={`/products/${product._id}`}>
                  View
                </Button>
                <Button component={Link} to={`/products/${product._id}/edit`}>
                  Edit
                </Button>
                <DeleteButton
                  productId={product._id}
                  successCallback={() => removeFromDom(product._id)}
                />
              </Box>
            }
          >
            <ListItemText
              primary={product.title}
              secondary={`$${product.price}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default ProductList;
