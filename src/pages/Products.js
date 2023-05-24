import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Slices/ProductsSlice";
import ProductsList from "./ProductsList";

import { Grid } from "@mui/material";
import Layout from "../utils/Layout";

const Products = () => {
  const dispatch = useDispatch();
  const { products, error, productsLoading } = useSelector(
    (state) => state.products
  );
  console.log(error, products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Layout>
    <Grid container spacing={2}>
      {error
        ? error
        : productsLoading
        ? "Loading"
        : products && products.length > 0
        ? products.map((p) => <ProductsList key={p.id} product={p} />)
        : "No Products Found"}
    </Grid>
    </Layout>
  );
};

export default Products;
