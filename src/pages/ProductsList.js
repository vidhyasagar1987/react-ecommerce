import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTocart } from "../Slices/CartSlice";
import { Link, } from "react-router-dom";

const ProductsList = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (p) => {
    dispatch(addTocart({ ...p, quantity: parseInt( 1) }));
  };

 
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
        />
        <CardContent>
          <Link to={`/products/${product.id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title.slice(0, 10)}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {product.description.slice(0, 10)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => addToCartHandler(product)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductsList;
