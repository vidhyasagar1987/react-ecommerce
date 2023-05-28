import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Slices/ProductsSlice";
import { LATEST_PRODUCTS } from "../../utils/Constants";

import { Grid } from "@mui/material";
import ProductList from "./ProductList";
const Products = () => {
  const dispatch = useDispatch();
  const { products, error, productsLoading } = useSelector(
    (state) => state.products
  );
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="latest">
      <div className="container">
        <h2>{LATEST_PRODUCTS}</h2>
        <Grid container spacing={2}>
          {error
            ? error
            : productsLoading
            ? "Loading"
            : products && products.length > 0
            ? products
                .filter((p) => p.category === "men's clothing")
                .map((p) => <ProductList key={p.id} product={p} />)
            : "No Products Found"}
        </Grid>
      </div>
    </section>
  );
};

export default Products;
