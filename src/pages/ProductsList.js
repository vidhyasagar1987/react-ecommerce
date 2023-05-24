import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const ProductsList = ({ product }) => {
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
            <Typography gutterBottom variant="h5" component="div">
              {product.title.slice(0,10)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description.slice(0, 10)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
      </Grid>
   
  );
};

export default ProductsList;
